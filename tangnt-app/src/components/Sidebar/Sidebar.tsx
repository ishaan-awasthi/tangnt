"use client";
import { useState } from 'react';
import { SquarePen, Search, Network, ChevronRight, ChevronLeft, Hexagon, User } from 'lucide-react';
import { SidebarChat } from './SidebarChat';
import { SidebarIcon } from './SidebarIcon';


export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

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
