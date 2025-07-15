import { useState } from 'react';
import { SquarePen, Search, Network, ChevronRight, ChevronLeft, Hexagon, User } from 'lucide-react';

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      className={
        isExpanded
          ? 'w-64 min-w-[16rem] bg-[#181818] transition-all duration-200 ease-in-out'
          : 'w-[52px] min-w-[52px] bg-[#212121] transition-all duration-200 ease-in-out'
      }
    >

    
      <div className="h-full flex flex-col border-r border-[#181818]">
      {/* Top Section: Logo, Expand/Collapse */}
      <div className="relative flex flex-col pt-[20px] pb-[20px] pl-[16px] pr-[16px] ">
        {/* Expanded sidebar */}
        {isExpanded && (
          <div className="flex items-center rounded-xl justify-between">
            {/* left side: icon + text */}
            <div className="flex items-center">
              <Hexagon size={24} className="text-gray-100" />
              <span className="text-[16px] font-thin text-gray-200 pl-[10px]">tangnt.app</span>
            </div>

            {/* right side: collapse chevron */}
            <ChevronLeft
              size={18}
              className="text-gray-400 hover:bg-[#232329] transition-colors text-gray-200 cursor-pointer"
              onClick={() => setIsExpanded(false)}
              aria-label="Collapse sidebar"
            />
          </div>
        )}

        {/* Collapsed sidebar */}
        {!isExpanded && (
          <div
            className="group relative flex items-center w-14 h-14 rounded-xl cursor-pointer hover:bg-[#232329]"
            onClick={() => setIsExpanded(true)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* consistent wrapper to lock layout */}
            <div className="w-6 h-6 min-w-[24px] min-h-[24px] flex items-center justify-center overflow-hidden">
              {isHovered ? (
                <ChevronRight size={24} className="text-gray-100" />
              ) : (
                <Hexagon size={24} className="text-gray-100" />
              )}
            </div>
          </div>
        )}
      </div>


        {/* Main Icons */}
        <div className="flex flex-col w-full items-center pt-[20px] pb-[20px]">
          <SidebarIcon icon={SquarePen} size={20} label="new chat" isExpanded={isExpanded} />
          <SidebarIcon icon={Search} size={20} label="search" isExpanded={isExpanded} />
          <SidebarIcon icon={Network} size={20} label="cortex" isExpanded={isExpanded} />
          <SidebarIcon icon={User} size={20} label="profile" isExpanded={isExpanded} />
        </div>

        {/* Divider and Chats Section (scrollable) */}
        {isExpanded && <div className="my-8 border-t border-[#232329]" />}
        {isExpanded && (
          <div className="flex-1 overflow-y-auto px-4 mt-6 pt-[20px] pl-[16px]">
            <div className="text-xs font-semibold text-gray-400 mb-2 pb-[4px]">previous chats</div>
            {/* Placeholder for chat list */}
            <div className="text-[12px] text-gray-500">no chats yet</div>
          </div>
        )}
      </div>
    </aside>
  );
}

function SidebarIcon({ icon: Icon, label, isExpanded, size}: { icon: any; label: string; isExpanded: boolean, size: number }) {
  return (
    <div className="flex items-center w-full group cursor-pointer rounded-lg pt-[10px] pb-[10px] pl-[32px] hover:bg-[#232329] transition-colors">
      <Icon className="text-gray-200 pt" size={size} />

      {isExpanded && <span className="text-base text-[14px] text-gray-200 font-medium pl-[10px]">{label}</span>}
    </div>
  );
}