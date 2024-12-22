import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numEnable, setNumEnable] = useState(false);
  const [charEnable, setCharEnable] = useState(false);
  const [password, setPassword] = useState("")
  const passwordGenerator = useCallback(() => {
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numEnable) str += "0123456789"
    if(charEnable) str += ":!@#$%^&*()-_=+{};:/?.>"

    for (let i = 1; i < array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      
    }

  }, [length, numEnable, charEnable, setPassword])

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password generator</h1>
    </>
  )
}

export default App
