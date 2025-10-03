"use client"; // hello!

export function SidebarChat({
    label,
    href,
    isExpanded
  }: {
    label: string;
    href: string;
    isExpanded: boolean;
  }) {

    return (
      <div className="px-2">
        <a href={href} className={`group flex items-center w-full cursor-pointer rounded-lg transition-colors pt-2.5 pb-2.5 hover:bg-light-hover dark:hover:bg-dark-hover`}>
          {isExpanded && (
            <span className={`text-sm font-extralight pl-3 text-light-sub group-hover:text-light-main dark:text-dark-sub dark:group-hover:text-dark-main`}>
              {label}
            </span>
          )}
        </a>
      </div>
    );
  }
  
