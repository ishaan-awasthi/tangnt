"use client";
import { VisualizationAreaFooter } from "./VisualizationAreaFooter";

export function VisualizationArea() {
  return (
    <div className="flex-1 flex flex-col bg-light-bg dark:bg-dark-bg">
      {/* Top content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-xs font-thin text-light-sub dark:text-dark-sub">
          PLACEHOLDER - VIZ AREA GOES HERE
        </div>
      </div>
      {/* Footer pinned to bottom */}
      <div className="w-full">
        <VisualizationAreaFooter />
      </div>
    </div>
  );
} 