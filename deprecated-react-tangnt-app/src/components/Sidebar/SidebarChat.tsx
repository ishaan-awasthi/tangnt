export function SidebarChat({
    label,
    isExpanded
  }: {
    label: string;
    isExpanded: boolean;
  }) {
    return (
      <div className="px-2">
        <div className="flex items-center w-full cursor-pointer rounded-lg hover:bg-hover transition-colors pt-2.5 pb-2.5">
          {isExpanded && (
            <span className="text-sm text-sub font-extralight pl-3">
              {label}
            </span>
          )}
        </div>
      </div>
    );
  }
  