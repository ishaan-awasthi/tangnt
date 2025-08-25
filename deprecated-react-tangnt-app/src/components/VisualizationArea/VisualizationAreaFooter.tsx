import { Moon, Flame, Sparkles, Highlighter, Spool, Sun } from 'lucide-react';

interface VisualizationAreaFooterProps {
  onToggleTheme: () => void;
  isDark: boolean;
}

export function VisualizationAreaFooter({ onToggleTheme, isDark }: VisualizationAreaFooterProps) {
    return (
      <div className="flex w-full h-16 bg-bg items-center justify-evenly">

        {/* light-dark mode */}
        <button
          onClick={onToggleTheme}
          className="p-2 rounded-lg hover:bg-hover transition-colors cursor-pointer"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <Sun size={16} className="text-sub hover:text-main transition-colors" />
          ) : (
            <Moon size={16} className="text-sub hover:text-main transition-colors" />
          )}
        </button>
        
        {/* heatmap */}
        <Flame size={16} className="text-sub hover:text-main transition-colors cursor-pointer" />

        {/* ai insights */}
        <Sparkles size={16} className="text-sub hover:text-main transition-colors cursor-pointer" />

        {/* highlight */}
        <Highlighter size={16} className="text-sub hover:text-main transition-colors cursor-pointer" />

        {/* timeline */}
        <Spool size={16} className="text-sub hover:text-main transition-colors cursor-pointer" />
        
      </div>
    )
  }