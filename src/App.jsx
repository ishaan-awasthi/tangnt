import './App.css'
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
    </>
  )
}

export default App
