"use client";
import { AArrowUp, Ligature, Compass, EyeClosed, Hourglass } from 'lucide-react';

export function ChatAreaFooter() {
    return (
      <div className="flex w-full h-16 bg-light-bg dark:bg-dark-bg items-center justify-evenly">

        {/* text size */}
        <AArrowUp size={16} className="transition-colors cursor-pointer text-light-sub hover:text-light-main dark:text-dark-sub dark:hover:text-dark-main" />
        
        {/* font */}
        <Ligature size={16} className="transition-colors cursor-pointer text-light-sub hover:text-light-main dark:text-dark-sub dark:hover:text-dark-main" />

        {/* guided */}
        <Compass size={16} className="transition-colors cursor-pointer text-light-sub hover:text-light-main dark:text-dark-sub dark:hover:text-dark-main" />

        {/* mirror */}
        <EyeClosed size={16} className="transition-colors cursor-pointer text-light-sub hover:text-light-main dark:text-dark-sub dark:hover:text-dark-main" />

        {/* time */}
        <Hourglass size={16} className="transition-colors cursor-pointer text-light-sub hover:text-light-main dark:text-dark-sub dark:hover:text-dark-main" />

      </div>
    )
  }