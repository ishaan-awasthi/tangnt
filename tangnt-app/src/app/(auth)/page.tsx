"use client";
import { ChatArea } from "@/components/ChatArea/ChatArea";
import { VisualizationArea } from "@/components/VisualizationArea/VisualizationArea";

export default function Home() {
  return (
    <div className="flex-1 flex overflow-hidden">
      <ChatArea />
      <div className="w-px bg-divider h-full" />
      <VisualizationArea />
    </div>
  );
}
