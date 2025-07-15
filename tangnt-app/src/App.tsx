import { Sidebar } from './components/Sidebar'
import { ChatArea } from './components/ChatArea'
import { VisualizationArea } from './components/VisualizationArea'

function App() {
  return (
    <div className="h-full w-full flex bg-[#131313] text-gray-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex overflow-hidden">
          <ChatArea />
          <div className="w-px bg-[#181818] h-full" />
          <VisualizationArea />
        </div>
      </div>
    </div>
  )
}

export default App
