import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [num, setNum] = useState(0)

  function addCount(){
    console.log(num);
    setNum(num+1)
  }

  function lessCount(){
    console.log(num);
    setNum(num-2)
  }

  return (
    <>
       <h1>Counter {num} </h1>
       <button onClick={addCount}>+</button>
       <button onClick={lessCount}>-</button>
    </>
  )
}

export default App
