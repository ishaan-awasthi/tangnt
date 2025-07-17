import { useState, useEffect } from 'react'
import { Sidebar } from './components/Sidebar/Sidebar.tsx'
import { ChatArea } from './components/ChatArea/ChatArea.tsx'
import { VisualizationArea } from './components/VisualizationArea/VisualizationArea.tsx'

function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    // On page load, check localStorage or default to dark
    const theme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    // Default to dark mode unless explicitly set to light
    if (theme === 'light') {
      setDark(false)
      document.documentElement.classList.remove('dark')
    } else {
      setDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newDark = !dark
    setDark(newDark)
    
    if (newDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="h-full w-full min-h-screen flex bg-bg text-main overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex overflow-hidden">
          <ChatArea />
          <div className="w-px bg-divider h-full" />
          <VisualizationArea onToggleTheme={toggleTheme} isDark={dark} />
        </div>
      </div>
    </div>
  )
}

export default App
