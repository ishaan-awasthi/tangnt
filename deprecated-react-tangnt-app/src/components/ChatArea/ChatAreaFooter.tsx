import { AArrowUp, Ligature, Compass, EyeClosed, Hourglass } from 'lucide-react';


export function ChatAreaFooter() {
    return (
      <div className="flex w-full h-16 bg-bg items-center justify-evenly">

        {/* text size */}
        <AArrowUp size={16} className="text-sub hover:text-main transition-colors cursor-pointer" />
        
        {/* font */}
        <Ligature size={16} className="text-sub hover:text-main transition-colors cursor-pointer" />

        {/* guided */}
        <Compass size={16} className="text-sub hover:text-main transition-colors cursor-pointer" />

        {/* mirror */}
        <EyeClosed size={16} className="text-sub hover:text-main transition-colors cursor-pointer" />

        {/* time */}
        <Hourglass size={16} className="text-sub hover:text-main transition-colors cursor-pointer" />

      </div>
    )
  }