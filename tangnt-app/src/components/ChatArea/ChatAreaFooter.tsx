"use client";
import { AArrowUp, Ligature, Compass, EyeClosed, Hourglass } from 'lucide-react';

export function ChatAreaFooter() {
    return (
      <div className="flex w-full h-16 bg-light-bg dark:bg-dark-bg items-center justify-evenly">

        {/* text size */}
        <button className="p-2 rounded-lg transition-colors cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover group" aria-label="Text Size">
          <AArrowUp size={16} className="transition-colors text-light-sub group-hover:text-light-main dark:text-dark-sub dark:group-hover:text-dark-main" />
        </button>
        
        {/* font */}
        <button className="p-2 rounded-lg transition-colors cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover group" aria-label="Font">
          <Ligature size={16} className="transition-colors text-light-sub group-hover:text-light-main dark:text-dark-sub dark:group-hover:text-dark-main" />
        </button>

        {/* guided */}
        <button className="p-2 rounded-lg transition-colors cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover group" aria-label="Guided">
          <Compass size={16} className="transition-colors text-light-sub group-hover:text-light-main dark:text-dark-sub dark:group-hover:text-dark-main" />
        </button>

        {/* mirror */}
        <button className="p-2 rounded-lg transition-colors cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover group" aria-label="Mirror">
          <EyeClosed size={16} className="transition-colors text-light-sub group-hover:text-light-main dark:text-dark-sub dark:group-hover:text-dark-main" />
        </button>

        {/* time */}
        <button className="p-2 rounded-lg transition-colors cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover group" aria-label="Time">
          <Hourglass size={16} className="transition-colors text-light-sub group-hover:text-light-main dark:text-dark-sub dark:group-hover:text-dark-main" />
        </button>

      </div>
    )
  }