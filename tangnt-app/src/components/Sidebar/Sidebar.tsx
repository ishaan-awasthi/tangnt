"use client";
import { useState, useEffect, useRef } from 'react';
import { SquarePen, Search, Network, ChevronRight, ChevronLeft, Hexagon, User, MoreHorizontal, Edit3, Trash2 } from 'lucide-react';
import { SidebarChat } from './SidebarChat';
import { SidebarIcon } from './SidebarIcon';
import { SearchModal } from '../Search/SearchModal';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { Tangent } from '@/types/database';
interface SidebarProps {
  user?: any | null;
}

export function Sidebar({ user }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleNewTangent = async () => {
    if (!user) return;
    
    setIsCreating(true);
    try {
      const response = await fetch('/api/tangents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'new tangent',
          content: ''
        })
      });
      
      const { tangent } = await response.json();
      
      if (tangent) {
        router.push(`/t/${tangent.id}`);
      }
    } catch (error) {
      console.error('Error creating tangent:', error);
    } finally {
      setIsCreating(false);
    }
  };

  const handleSearchSelect = (tangent: Tangent) => {
    router.push(`/t/${tangent.id}`);
  };

  return (
    <aside
      className={
        isExpanded
          ? `w-60 min-w-64 transition-all duration-300 ease-in-out bg-light-sidebar dark:bg-dark-sidebar`
          : `w-20 min-w-20 transition-all duration-300 ease-in-out bg-light-sidebar dark:bg-dark-sidebar`
      }
    >
      <div className={`h-full flex flex-col border-r border-light-divider dark:border-dark-divider`}>
        {/* Top Section: Logo, Expand/Collapse */}
        <div className="relative flex flex-col pt-8 pb-4 pl-4 pr-4">
          {isExpanded ? (
            <div className="flex items-center rounded-xl justify-between">
              <div className="flex items-center">
                <Hexagon size={32} className="text-light-main dark:text-dark-main" />
                <span className={`text-xl font-light pl-2 text-light-main dark:text-dark-main`}>tangnt.app</span>
              </div>
              <button
                className="p-2 rounded-lg transition-colors cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover group"
                onClick={() => setIsExpanded(false)}
                aria-label="Collapse sidebar"
              >
                <ChevronLeft
                  size={18}
                  className="transition-colors text-light-sub group-hover:text-light-main dark:text-dark-sub dark:group-hover:text-dark-main"
                />
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                className="group relative flex items-center justify-center w-8 h-8 rounded-lg cursor-pointer transition-colors hover:bg-light-hover dark:hover:bg-dark-hover"
                onClick={() => setIsExpanded(true)}
                aria-label="Expand sidebar"
              >
                <Hexagon size={24} className="transition-colors text-light-main dark:text-dark-main group-hover:opacity-0 absolute" />
                <ChevronRight size={18} className="transition-colors text-light-sub group-hover:text-light-main dark:text-dark-sub dark:group-hover:text-dark-main group-hover:opacity-100 opacity-0" />
              </button>
            </div>
          )}
        </div>

        {/* Main Icons */}
        <div className="flex flex-col items-center pt-5 pb-3 px-2">
          <button
            onClick={handleNewTangent}
            disabled={isCreating}
            className={`group flex items-center p-2 rounded-lg transition-colors hover:bg-light-hover dark:hover:bg-dark-hover disabled:opacity-50 ${isExpanded ? 'w-full' : 'w-10 mx-auto justify-center'}`}
          >
            <SquarePen size={20} className="text-light-sub group-hover:text-light-main dark:text-dark-sub dark:group-hover:text-dark-main ml-1" />
            {isExpanded && (
              <span className="ml-2 text-sm text-light-sub group-hover:text-light-main dark:text-dark-sub dark:group-hover:text-dark-main">
                {isCreating ? 'creating...' : 'new tangent'}
              </span>
            )}
          </button>
            <SidebarIcon 
              icon={Search} 
              size={20} 
              label="search" 
              isExpanded={isExpanded} 
              onClick={() => setShowSearchModal(true)}
            />
          <SidebarIcon icon={Network} size={20} label="cortex" isExpanded={isExpanded} />
        </div>

        {/* Divider and Chats Section */}
        {isExpanded && <div className={`my-8 border-t border-light-divider dark:border-dark-divider`} />}
        {isExpanded && (
          <UserTangentsList isExpanded={isExpanded} />
        )}

        {/* Bottom Sticky Footer */}
        {isExpanded && (
          <div className="relative flex-shrink-0 bg-light-sidebar dark:bg-dark-sidebar z-10">
            <button
              className={`p-6 pr-12 w-full border-t flex items-center justify-center space-x-3 border-light-divider dark:border-dark-divider hover:bg-light-hover dark:hover:bg-dark-hover`}
              onClick={() => setShowUserMenu((v) => !v)}
            >
              <User size={20} className="text-light-sub dark:text-dark-sub" />
              <div className="flex flex-col">
                <span className={`text-sm font-medium text-light-main dark:text-dark-main`}>
                  {user?.user_metadata?.name || 'Anonymous User'}
                </span>
                <span className={`text-xs text-light-sub dark:text-dark-sub`}>
                  {user?.user_metadata?.account_type || 'Guest'}
                </span>
              </div>
            </button>
            {showUserMenu && (
              <div className="absolute right-6 bottom-20 z-10 bg-light-bg dark:bg-dark-bg border border-light-divider dark:border-dark-divider rounded-md shadow-md">
                <button
                  className="px-4 py-2 text-sm text-light-sub hover:text-light-main dark:text-dark-sub dark:hover:text-dark-main"
                  onClick={async () => { await supabase.auth.signOut(); router.push('/login'); router.refresh(); }}
                >
                  sign out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Search Modal */}
      <SearchModal
        isOpen={showSearchModal}
        onClose={() => setShowSearchModal(false)}
        onSelectTangent={handleSearchSelect}
      />
    </aside>
  );
}

function UserTangentsList({ isExpanded }: { isExpanded: boolean }) {
  const [items, setItems] = useState<{ id: string; title: string | null; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showMenuFor, setShowMenuFor] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [confirmingDelete, setConfirmingDelete] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const supabase = createClient();

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/tangents/${id}`, { method: 'DELETE' });
      setItems(items.filter(item => item.id !== id));
      setShowMenuFor(null);
      setConfirmingDelete(null);
    } catch (error) {
      console.error('Failed to delete tangent:', error);
    }
  };

  const handleRename = async (id: string, newTitle: string) => {
    try {
      await fetch(`/api/tangents/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle })
      });
      setItems(items.map(item => 
        item.id === id ? { ...item, title: newTitle } : item
      ));
      setEditingId(null);
      setEditingTitle('');
    } catch (error) {
      console.error('Failed to rename tangent:', error);
    }
  };

  const startRename = (tangent: { id: string; title: string | null; content: string }) => {
    setEditingId(tangent.id);
    setEditingTitle(tangent.title || '');
  };

  const finishRename = () => {
    if (editingId && editingTitle.trim()) {
      handleRename(editingId, editingTitle.trim());
    } else {
      setEditingId(null);
      setEditingTitle('');
    }
  };

  const cancelRename = () => {
    setEditingId(null);
    setEditingTitle('');
  };

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch('/api/tangents');
        const json = await res.json();
        console.log('Sidebar API response:', json);
        if (!active) return;
        const tangents = (json.tangents || []) as { id: string; title: string | null; content: string }[];
        console.log('Sidebar tangents:', tangents);
        setItems(tangents);
        setIsLoading(false);
      } catch (e) {
        console.error('Failed to load tangents', e);
        setIsLoading(false);
      }
    })();
    return () => { active = false };
  }, []);


  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showMenuFor && !(event.target as Element).closest('.relative.group')) {
        setShowMenuFor(null);
        setEditingId(null);
        setEditingTitle('');
        setConfirmingDelete(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMenuFor]);

  return (
    <>
    <div className={`text-base font-light mb-2 pl-4 text-light-main dark:text-dark-main`}>previous tangents</div>
    <div className="flex-1 overflow-y-auto mt-6 hide-scrollbar">
        {isLoading ? (
          <div className="pl-4 text-sm text-light-sub font-extralight group-hover:text-light-main dark:text-dark-sub dark:group-hover:text-dark-main">loading tangents...</div>
        ) : (
          <>
            {items.map(t => (
            <div key={t.id} className="relative group">
              <SidebarChat href={`/t/${t.id}`} label={t.title || (t.content || '').slice(0, 32) || 'untitled'} isExpanded={isExpanded} />
              {isExpanded && (
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-light-hover dark:hover:bg-dark-hover"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowMenuFor(showMenuFor === t.id ? null : t.id);
                  }}
                >
                  <MoreHorizontal size={16} className="text-light-sub dark:text-dark-sub" />
                </button>
              )}
              {showMenuFor === t.id && (
                <div className="absolute right-0 top-8 z-20 bg-light-bg dark:bg-dark-bg border border-light-divider dark:border-dark-divider rounded-md shadow-lg py-1 min-w-32">
                  {editingId === t.id ? (
                    <div className="px-3 py-2">
                      <input
                        ref={(el) => {
                          if (el && editingId === t.id) {
                            inputRef.current = el;
                            // Focus and position cursor when this specific input is rendered
                            setTimeout(() => {
                              el.focus();
                              el.setSelectionRange(el.value.length, el.value.length);
                            }, 0);
                          }
                        }}
                        type="text"
                        value={editingTitle}
                        onChange={(e) => setEditingTitle(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            finishRename();
                          } else if (e.key === 'Escape') {
                            cancelRename();
                          }
                        }}
                        onBlur={finishRename}
                        className="w-full bg-transparent border-b border-light-divider dark:border-dark-divider text-sm text-light-main dark:text-dark-main outline-none"
                        autoFocus
                      />
                    </div>
                  ) : (
                    <button
                      className="w-full px-3 py-2 text-left text-sm text-light-main dark:text-dark-main hover:bg-light-hover dark:hover:bg-dark-hover flex items-center gap-2"
                      onClick={() => startRename(t)}
                    >
                      <Edit3 size={14} />
                      rename
                    </button>
                  )}
                  
                  {confirmingDelete === t.id ? (
                    <div className="px-3 py-2">
                      <div className="text-xs text-light-sub dark:text-dark-sub mb-2">are you sure?</div>
                      <div className="flex gap-1">
                        <button
                          className="flex-1 px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                          onClick={() => handleDelete(t.id)}
                        >
                          yes
                        </button>
                        <button
                          className="flex-1 px-2 py-1 text-xs bg-light-hover dark:bg-dark-hover text-light-main dark:text-dark-main rounded hover:bg-light-main dark:hover:bg-dark-main"
                          onClick={() => setConfirmingDelete(null)}
                        >
                          no
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      className="w-full px-3 py-2 text-left text-sm text-red-500 hover:bg-light-hover dark:hover:bg-dark-hover flex items-center gap-2"
                      onClick={() => setConfirmingDelete(t.id)}
                    >
                      <Trash2 size={14} />
                      delete
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
          {items.length === 0 && (
            <div className="pl-4 text-sm text-light-sub font-extralight group-hover:text-light-main dark:text-dark-sub dark:group-hover:text-dark-main">no tangents yet</div>
          )}
        </>
      )}
    </div></>
  );
}
