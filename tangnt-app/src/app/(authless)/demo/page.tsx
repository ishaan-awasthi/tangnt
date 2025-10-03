import { ChatArea } from "@/components/ChatArea/ChatArea";
import { VisualizationArea } from "@/components/VisualizationArea/VisualizationArea";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function DemoPage() {
  // Demo page with no authentication - shows empty state
  return (
    <div className="h-full w-full min-h-screen flex overflow-hidden bg-light-bg dark:bg-dark-bg text-light-main dark:text-dark-main">
      <Sidebar user={null} />
      <div className="flex-1 flex overflow-hidden">
        <ChatArea tangents={[]} />
        <div className="w-px bg-divider h-full" />
        <VisualizationArea tangents={[]} />
      </div>
    </div>
  );
}
