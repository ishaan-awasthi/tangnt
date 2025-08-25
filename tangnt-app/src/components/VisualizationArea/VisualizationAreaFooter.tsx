"use client";
import { Moon, Flame, Sparkles, Highlighter, Spool, Sun } from 'lucide-react';
import { useTheme } from "@/hooks/useTheme";

export function VisualizationAreaFooter() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="flex w-full h-16 items-center justify-evenly bg-light-bg dark:bg-dark-bg">
      {/* light-dark mode */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg transition-colors cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun size={16} className="transition-colors text-dark-sub hover:text-dark-main" />
        ) : (
          <Moon size={16} className="transition-colors text-light-sub hover:text-light-main" />
        )}
      </button>
      {/* heatmap */}
      <Flame size={16} className="transition-colors cursor-pointer text-light-sub hover:text-light-main dark:text-dark-sub dark:hover:text-dark-main" />
      {/* ai insights */}
      <Sparkles size={16} className="transition-colors cursor-pointer text-light-sub hover:text-light-main dark:text-dark-sub dark:hover:text-dark-main" />
      {/* highlight */}
      <Highlighter size={16} className="transition-colors cursor-pointer text-light-sub hover:text-light-main dark:text-dark-sub dark:hover:text-dark-main" />
      {/* timeline */}
      <Spool size={16} className="transition-colors cursor-pointer text-light-sub hover:text-light-main dark:text-dark-sub dark:hover:text-dark-main" />
    </div>
  );
}