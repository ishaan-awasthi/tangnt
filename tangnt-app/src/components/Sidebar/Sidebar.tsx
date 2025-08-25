"use client";
import { useState } from 'react';
import { SquarePen, Search, Network, ChevronRight, ChevronLeft, Hexagon, User } from 'lucide-react';
import { SidebarChat } from './SidebarChat';
import { SidebarIcon } from './SidebarIcon';


export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      className={
        isExpanded
          ? `w-60 min-w-64 transition-all duration-300 ease-in-out bg-light-sidebar dark:bg-dark-sidebar`
          : `w-16 min-w-16 transition-all duration-300 ease-in-out bg-light-sidebar dark:bg-dark-sidebar`
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
              <ChevronLeft
                size={18}
                className={`hover:bg-light-hover dark:hover:bg-dark-hover transition-colors cursor-pointer text-light-sub hover:text-light-main dark:text-dark-sub dark:hover:text-dark-main`}
                onClick={() => setIsExpanded(false)}
                aria-label="Collapse sidebar"
              />
            </div>
          ) : (
            <div
              className={`group relative flex items-center w-12 h-12 rounded-xl cursor-pointer transition-colors hover:bg-light-hover dark:hover:bg-dark-hover`}
              onClick={() => setIsExpanded(true)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="w-6 h-6 min-w-6 min-h-6 flex items-center justify-center overflow-hidden">
                {isHovered ? (
                  <ChevronRight size={18} className="text-light-main dark:text-dark-main" />
                ) : (
                  <Hexagon size={24} className="text-light-main dark:text-dark-main" />
                )}
              </div>
            </div>
          )}
        </div>

        {/* Main Icons */}
        <div className="flex flex-col items-center pt-5 pb-3 pr-4">
          <SidebarIcon icon={SquarePen} size={20} label="new tangent" isExpanded={isExpanded} />
          <SidebarIcon icon={Search} size={20} label="search" isExpanded={isExpanded} />
          <SidebarIcon icon={Network} size={20} label="cortex" isExpanded={isExpanded} />
        </div>

        {/* Divider and Chats Section */}
        {isExpanded && <div className={`my-8 border-t border-light-divider dark:border-dark-divider`} />}
        {isExpanded && (
          <div className="flex-1 overflow-y-auto mt-6">
            <div className={`text-base font-light mb-2 pb-2 pl-4 text-light-main dark:text-dark-main`}>previous tangents</div>
            <SidebarChat label="kanye's autotune" isExpanded={isExpanded} />
            <SidebarChat label="ex funny story" isExpanded={isExpanded} />
            <SidebarChat label="drake vs kendrick" isExpanded={isExpanded} />
          </div>
        )}

        {/* Bottom Sticky Footer */}
        {isExpanded && (
          <div className={`p-6 pr-12 border-t flex items-center justify-center space-x-3 border-light-divider dark:border-dark-divider`}>
            <User size={20} className="text-light-sub dark:text-dark-sub" />
            <div className="flex flex-col">
              <span className={`text-sm font-medium text-light-main dark:text-dark-main`}>Ishaan Awasthi</span>
              <span className={`text-xs text-light-sub dark:text-dark-sub`}>Pre-Alpha Tester</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
