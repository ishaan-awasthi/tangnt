"use client";

export function SidebarIcon({
    icon: Icon,
    label,
    isExpanded,
    size,
    onClick,
  }: {
    icon: any;
    label: string;
    isExpanded: boolean;
    size: number;
    onClick?: () => void;
  }) {

    return (
      <div className="w-full">
        <div
          className={
            `group flex items-center cursor-pointer rounded-lg transition-colors p-2 hover:bg-light-hover dark:hover:bg-dark-hover ` +
            (isExpanded ? 'w-full' : 'w-10 mx-auto justify-center')
          }
          onClick={onClick}
        >
          <Icon className="text-light-sub group-hover:text-light-main dark:text-dark-sub dark:group-hover:text-dark-main ml-1" size={size} />
          {isExpanded && (
            <span className={`text-sm pl-2 text-light-sub group-hover:text-light-main dark:text-dark-sub dark:group-hover:text-dark-main`}>
              {label}
            </span>
          )}
        </div>
      </div>
    );
  }
  