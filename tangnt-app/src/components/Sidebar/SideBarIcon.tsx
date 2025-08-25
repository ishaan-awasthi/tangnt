"use client";

export function SidebarIcon({
    icon: Icon,
    label,
    isExpanded,
    size,
  }: {
    icon: any;
    label: string;
    isExpanded: boolean;
    size: number;
  }) {

    return (
      <div className="w-full px-2">
        <div className={`flex items-center w-full cursor-pointer rounded-lg transition-colors pt-2.5 pb-2.5 pl-3 hover:bg-light-hover dark:hover:bg-dark-hover`}>
          <Icon className="text-light-sub hover:text-light-main dark:text-dark-sub dark:hover:text-dark-main" size={size} />
          {isExpanded && (
            <span className={`text-sm font-light pl-3 text-light-sub hover:text-light-main dark:text-dark-sub dark:hover:text-dark-main`}>
              {label}
            </span>
          )}
        </div>
      </div>
    );
  }
  