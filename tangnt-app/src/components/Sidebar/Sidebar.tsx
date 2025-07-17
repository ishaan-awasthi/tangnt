import { useState } from 'react';
import { SquarePen, Search, Network, ChevronRight, ChevronLeft, Hexagon, User } from 'lucide-react';
import { SidebarIcon } from './SideBarIcon';
import { SidebarChat } from './SidebarChat';
interface SidebarProps {
  onToggleTheme: () => void;
  isDark: boolean;
}

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      className={
        isExpanded
          ? 'w-60 min-w-64 bg-sidebar transition-all duration-300 ease-in-out'
          : 'w-24 min-w-24 bg-dark-bg transition-all duration-300 ease-in-out'
      }
    >
      <div className="h-full flex flex-col border-r border-neutral-800">
        {/* Top Section: Logo, Expand/Collapse */}
        <div className="relative flex flex-col pt-8 pb-4 pl-8 pr-4">
          {isExpanded ? (
            <div className="flex items-center rounded-xl justify-between">
              <div className="flex items-center">
                <Hexagon size={32} className="text-main" />
                <span className="text-xl font-light text-main pl-2">tangnt.app</span>
              </div>
              <ChevronLeft
                size={18}
                className="text-sub hover:bg-hover transition-colors text-main cursor-pointer"
                onClick={() => setIsExpanded(false)}
                aria-label="Collapse sidebar"
              />
            </div>
          ) : (
            <div
              className="group relative flex items-center w-12 h-12 rounded-xl cursor-pointer hover:bg-hover"
              onClick={() => setIsExpanded(true)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="w-6 h-6 min-w-6 min-h-6 flex items-center justify-center overflow-hidden">
                {isHovered ? (
                  <ChevronRight size={18} className="text-main" />
                ) : (
                  <Hexagon size={24} className="text-main" />
                )}
              </div>
            </div>
          )}
        </div>

        {/* Main Icons */}
        <div className="flex flex-col items-center pt-5 pb-3 pl-2 pr-4">
          <SidebarIcon icon={SquarePen} size={20} label="new tangent" isExpanded={isExpanded} />
          <SidebarIcon icon={Search} size={20} label="search" isExpanded={isExpanded} />
          <SidebarIcon icon={Network} size={20} label="cortex" isExpanded={isExpanded} />
        </div>

        {/* Divider and Chats Section */}
        {isExpanded && <div className="my-8 border-t border-neutral-800" />}
        {isExpanded && (
          <div className="flex-1 overflow-y-auto px-4 mt-6">
            <div className="text-base font-light text-main mb-2 pb-2 pl-4">previous tangents</div>
            <SidebarChat label="kanye's autotune" isExpanded={isExpanded} />
            <SidebarChat label="ex funny story" isExpanded={isExpanded} />
            <SidebarChat label="drake vs kendrick" isExpanded={isExpanded} />
          </div>
        )}

        {/* Bottom Sticky Footer */}
        {isExpanded && (
          <div className="p-6 pr-12 border-t border-neutral-800 flex items-center justify-center space-x-3">
            <User size={20} className="text-sub" />
            <div className="flex flex-col">
              <span className="text-main text-sm font-medium">Ishaan Awasthi</span>
              <span className="text-sub text-xs">Pre-Alpha Tester</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
