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
        <div className={`group flex items-center ${isExpanded ? 'w-full' : 'w-10 mx-auto'} cursor-pointer rounded-lg transition-colors pt-2.5 pb-2.5 ${isExpanded ? 'pl-3' : 'justify-center'} hover:bg-light-hover dark:hover:bg-dark-hover`}>
          <Icon className="text-light-sub group-hover:text-light-main dark:text-dark-sub dark:group-hover:text-dark-main" size={size} />
          {isExpanded && (
            <span className={`text-sm font-light pl-3 text-light-sub group-hover:text-light-main dark:text-dark-sub dark:group-hover:text-dark-main`}>
              {label}
            </span>
          )}
        </div>
      </div>
    );
  }
  