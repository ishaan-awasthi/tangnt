import { VisualizationAreaFooter } from './VisualizationAreaFooter';

interface VisualizationAreaProps {
  onToggleTheme: () => void;
  isDark: boolean;
}

export function VisualizationArea({ onToggleTheme, isDark }: VisualizationAreaProps) {
  return (
    <div className="flex-1 flex flex-col bg-bg">
      {/* Top content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-sub text-xs font-thin">PLACEHOLDER - VIZ AREA GOES HERE</div>
      </div>
      {/* Footer pinned to bottom */}
      <div className="w-full">
        <VisualizationAreaFooter onToggleTheme={onToggleTheme} isDark={isDark} />
      </div>
    </div>
  );
} 