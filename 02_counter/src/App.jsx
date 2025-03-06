import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 3

  let [counter, setCounter] = useState(4)

  const addValue = ()=>{
    if(counter < 20){
      setCounter(counter + 1)
    }
    
  }

  const removeValue = ()=>{
    if(counter > 0){
      setCounter(counter - 1)
    }
   
  }

  return (
    <>
    <h1>Sagor das</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>Minus value</button>
    </>
  )
}

export default App
