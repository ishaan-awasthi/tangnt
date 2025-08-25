
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
        <div className="flex items-center w-full cursor-pointer rounded-lg hover:bg-hover transition-colors pt-2.5 pb-2.5 pl-3">
          <Icon className="text-main" size={size} />
          {isExpanded && (
            <span className="text-sm text-main font-light pl-3">
              {label}
            </span>
          )}
        </div>
      </div>
    );
  }
  