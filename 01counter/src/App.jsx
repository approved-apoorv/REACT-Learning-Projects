import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  
  const addValue = ()=>{
    setCount(count+1)
  }

  const subtractValue = ()=>{
    if(count>0){
      setCount(count-1)
    }
  }

  return (
    <>
      <h1>The count is {count}</h1>
      <button
      onClick={addValue}
      >Add value</button>
      <button
      onClick={subtractValue}
      >Subtract value</button>
    </>
  )
}

export default App
