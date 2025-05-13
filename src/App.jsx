import './App.css'
import temp2 from './assets/temp2.jpg'

function App() {
  return (
    <>
      <div id="wrapper">
        <div id="text-wrapper">
          <h1>I KNOW SOMETHING YOU DON'T.</h1>
        </div>
        <div id="image-wrapper">
          <img src={temp2}/>
        </div>
      </div>
    </>
  )
}

export default App
