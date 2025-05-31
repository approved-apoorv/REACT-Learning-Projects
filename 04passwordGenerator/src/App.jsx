import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

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

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numEnable, charEnable, setPassword])
  const passwordRef = useRef(null)

  const copyPassToClip = useCallback(() => {
    passwordRef.current?.select()
    // alert("Copied to clipboard!")

    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numEnable, charEnable, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-900'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password} 
          className="outline-none w-full py-1 px-3" 
          placeholder="Password" 
          readOnly
          ref = {passwordRef}
          />
          <button onClick={copyPassToClip} className='outline-none bg-blue-400 text-black px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-3'>
          <div>
            <input type="range"
            min={8}
            max={30}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked = {numEnable}
            id='numberInput'
            onChange={() => {
              setNumEnable((prev) => !prev);
            }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked = {charEnable}
            id='characterInput'
            onChange={() => {
              setCharEnable((prev) => !prev);
            }}
            />
            <label>Characters</label>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
