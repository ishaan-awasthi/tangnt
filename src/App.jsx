import './App.css'
import { Analytics } from "@vercel/analytics/next"
import pic from './assets/you should not be trying to read this.png'

function App() {
  return (
    <>
      <div id="wrapper">
        <div id="text-wrapper">
          <h1>I KNOW SOMETHING YOU DON'T.</h1>
        </div>
        <div id="image-wrapper">
          <img src={pic}/>
        </div>
      </div>
      <Analytics />
    </>
  )
}

export default App
