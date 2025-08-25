"use client";
import { useRef, useEffect, useState } from 'react';
import { ChatAreaFooter } from './ChatAreaFooter';

export function ChatArea() {
  const editableRef = useRef<HTMLDivElement>(null);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    editableRef.current?.focus();
  }, []);

  return (
    <div className="flex-1 flex flex-col h-full w-full bg-light-bg dark:bg-dark-bg">
      {/* Centered fixed-size editor with clean internal scroll */}
      <div className="flex-1 flex items-center justify-center text-base font-light leading-relaxed font-manrope text-light-main dark:text-dark-main">
        <div className="w-[500px] h-[500px] bg-transparent rounded-lg p-8">
          <div
            ref={editableRef}
            contentEditable
            suppressContentEditableWarning
            className={`w-full h-full overflow-auto outline-none whitespace-pre-wrap break-words hide-scrollbar ${
              isEmpty
                ? 'before:content-[attr(data-placeholder)] before:pointer-events-none before:absolute'
                : ''
            } before:text-light-sub dark:before:text-dark-sub`}
            data-placeholder="don't think, just type..."
            onInput={(e) => {
              const text = (e.currentTarget.textContent || '').trim();
              setIsEmpty(text === '');
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
