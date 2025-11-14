import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlayerThrow from './PlayerThrowComponent'
import ComputerThrow from './ComputerThrowComponent'
import Outcome from './assets/OutcomeComponent'

function App() {
  const [selectedState, setSelectedFn] = useState(0);
  return (
    <>
      <PlayerThrow selected={selectedState} setSelected= {setSelectedFn} />
      <ComputerThrow/>
      <Outcome/>
    </>
  )
}

export default App
