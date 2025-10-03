"use client";
import { useRef, useEffect, useState } from 'react';
import { ChatAreaFooter } from './ChatAreaFooter';
import { Tangent } from '@/types/database';

interface ChatAreaProps {
  tangents: Tangent[];
  currentTangent?: Tangent;
}

export function ChatArea({ tangents, currentTangent }: ChatAreaProps) {
  const editableRef = useRef<HTMLDivElement>(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [lastLoadedTangentId, setLastLoadedTangentId] = useState<string | null>(null);
  const saveTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastSavedContentRef = useRef<string>('');

  useEffect(() => {
    editableRef.current?.focus();
  }, []);

  // Load current tangent content if provided
  useEffect(() => {
    if (editableRef.current) {
      if (currentTangent) {
        // Only update if this is a different tangent than what we last loaded
        if (lastLoadedTangentId !== currentTangent.id) {
          // Use innerHTML with <br> tags to preserve newlines properly
          editableRef.current.innerHTML = currentTangent.content.replace(/\n/g, '<br>');
          setIsEmpty(currentTangent.content.trim() === '');
          setLastLoadedTangentId(currentTangent.id);
          
          // Position cursor at the end
          const range = document.createRange();
          const selection = window.getSelection();
          range.selectNodeContents(editableRef.current);
          range.collapse(false); // false means collapse to end
          selection?.removeAllRanges();
          selection?.addRange(range);
        }
      } else {
        // No current tangent - clear editor
        if (lastLoadedTangentId !== null) {
          editableRef.current.textContent = '';
          setIsEmpty(true);
          setLastLoadedTangentId(null);
        }
      }
    }
  }, [currentTangent, lastLoadedTangentId]);

  // Generate title from first line of content
  const generateTitle = (content: string) => {
    const firstLine = content.split('\n')[0].trim();
    return firstLine.length > 0 ? firstLine.slice(0, 50) : 'untitled';
  };

  // Debounced save of content - either to existing tangent or create new one
  const queueSave = (content: string) => {
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    
    // Use 3 seconds for creating new tangents, 1 second for updating existing ones
    const delay = currentTangent ? 1000 : 3000;
    
    saveTimerRef.current = setTimeout(async () => {
      if (content === lastSavedContentRef.current) return;
      
      // Only save if there's actual content
      if (content.trim() === '') return;
      
      try {
        // Always generate title from first line of content
        const newTitle = generateTitle(content);
        
        if (currentTangent) {
          // Update existing tangent
          await fetch(`/api/tangents/${currentTangent.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              content,
              title: newTitle
            })
          });
        } else {
          // Create new tangent and redirect to it
          const response = await fetch('/api/tangents', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              content,
              title: newTitle
            })
          });
          
          if (response.ok) {
            const data = await response.json();
            // Redirect to the new tangent page
            window.location.href = `/t/${data.tangent.id}`;
            return; // Don't update lastSavedContentRef since we're redirecting
          }
        }
        lastSavedContentRef.current = content;
      } catch (e) {
        console.error('Failed to save tangent content', e);
      }
    }, delay);
  };

  return (
    <div className="flex-1 flex flex-col h-full w-full bg-light-bg dark:bg-dark-bg">
      {/* Centered fixed-size editor with clean internal scroll */}
      <div className="flex-1 flex items-center justify-center text-base font-light leading-relaxed font-manrope text-light-main dark:text-dark-main">
        <div className="w-[500px] h-[500px] bg-transparent rounded-lg p-8">
          <div
            ref={editableRef}
            contentEditable
            suppressContentEditableWarning
            className={`w-full h-full overflow-auto outline-none break-words hide-scrollbar ${
              isEmpty
                ? 'before:content-[attr(data-placeholder)] before:pointer-events-none before:absolute'
                : ''
            } before:text-light-sub dark:before:text-dark-sub`}
            data-placeholder="don't think, just type..."
            onInput={(e) => {
              // Convert <br> tags back to newlines for saving
              const raw = e.currentTarget.innerHTML.replace(/<br\s*\/?>/gi, '\n').replace(/<div>/gi, '\n').replace(/<\/div>/gi, '');
              const text = raw.trim();
              setIsEmpty(text === '');
              // queue save full raw content to preserve whitespace/newlines
              queueSave(raw);
            }}
          />
        </div>
      </div>
      {/* Sticky Footer */}
      <div className="w-full">
        <ChatAreaFooter />
      </div>
    </div>
  );
}
