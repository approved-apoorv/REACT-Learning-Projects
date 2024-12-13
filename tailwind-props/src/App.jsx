import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className='bg-amber-600 bg-contain p-3 mb-4'>Apoorv Baghel</h1>
      <Card username="Apoorv baghel"/>
      <br />
      <Card />
    </>
  )
}

export default App
