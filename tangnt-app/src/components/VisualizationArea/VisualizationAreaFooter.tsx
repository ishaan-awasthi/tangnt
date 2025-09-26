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
        className="p-2 rounded-lg transition-colors cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover group"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Moon size={16} className="transition-colors text-dark-sub group-hover:text-dark-main" />
        ) : (
          <Sun size={16} className="transition-colors text-light-sub group-hover:text-light-main" />
        )}
      </button>
      {/* heatmap */}
      <button className="p-2 rounded-lg transition-colors cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover group" aria-label="Heatmap">
        <Flame size={16} className="transition-colors text-light-sub group-hover:text-light-main dark:text-dark-sub dark:group-hover:text-dark-main" />
      </button>
      {/* ai insights */}
      <button className="p-2 rounded-lg transition-colors cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover group" aria-label="AI Insights">
        <Sparkles size={16} className="transition-colors text-light-sub group-hover:text-light-main dark:text-dark-sub dark:group-hover:text-dark-main" />
      </button>
      {/* highlight */}
      <button className="p-2 rounded-lg transition-colors cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover group" aria-label="Highlight">
        <Highlighter size={16} className="transition-colors text-light-sub group-hover:text-light-main dark:text-dark-sub dark:group-hover:text-dark-main" />
      </button>
      {/* timeline */}
      <button className="p-2 rounded-lg transition-colors cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover group" aria-label="Timeline">
        <Spool size={16} className="transition-colors text-light-sub group-hover:text-light-main dark:text-dark-sub dark:group-hover:text-dark-main" />
      </button>
    </div>
  );
}
