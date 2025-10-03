"use client";
import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Tangent } from '@/types/database';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTangent: (tangent: Tangent) => void;
}

export function SearchModal({ isOpen, onClose, onSelectTangent }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Tangent[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Search function
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchTangents = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/tangents');
        const { tangents } = await response.json();
        
        const filtered = tangents.filter((tangent: Tangent) => 
          tangent.title?.toLowerCase().includes(query.toLowerCase()) ||
          tangent.content.toLowerCase().includes(query.toLowerCase())
        );
        
        setResults(filtered);
      } catch (error) {
        console.error('Search failed:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(searchTangents, 300); // Debounce search
    return () => clearTimeout(timeoutId);
  }, [query]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
      <div className="w-96 max-w-[90vw] bg-light-sidebar dark:bg-dark-sidebar border border-black dark:border-transparent rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-light-divider dark:border-dark-divider">
          <Search size={20} className="text-light-sub dark:text-dark-sub" />
          <input
            ref={inputRef}
            type="text"
            placeholder="search tangents..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-light-main dark:text-dark-main placeholder:text-light-sub dark:placeholder:text-dark-sub"
          />
          <button
            onClick={onClose}
            className="p-1 hover:bg-light-hover dark:hover:bg-dark-hover rounded transition-colors"
          >
            <X size={16} className="text-light-sub dark:text-dark-sub" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-light-sub dark:text-dark-sub">
              searching...
            </div>
          ) : results.length > 0 ? (
            <div className="py-2">
              {results.map((tangent) => (
                <button
                  key={tangent.id}
                  onClick={() => {
                    onSelectTangent(tangent);
                    onClose();
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-light-hover dark:hover:bg-dark-hover transition-colors"
                >
                  <div className="font-medium text-light-main dark:text-dark-main mb-1">
                    {tangent.title || tangent.content.slice(0, 30) + (tangent.content.length > 30 ? '...' : '') || 'untitled'}
                  </div>
                  <div className="text-sm text-light-sub dark:text-dark-sub line-clamp-2">
                    {tangent.content.slice(0, 100)}
                    {tangent.content.length > 100 && '...'}
                  </div>
                </button>
              ))}
            </div>
          ) : query ? (
            <div className="p-4 text-center text-light-sub dark:text-dark-sub">
              no results found
            </div>
          ) : (
            <div className="p-4 text-center font-extralight text-xs text-light-sub dark:text-dark-sub">
              start typing to search...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
