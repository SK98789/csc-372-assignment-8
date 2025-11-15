import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css';
import './App.css'
import PlayerThrow from './PlayerThrowComponent'
import ComputerThrow from './ComputerThrowComponent'
import Outcome from './OutcomeComponent'
import PlayAgain from './PlayAgainButton';

function App() {
  const [selectedState, setSelectedFn] = useState(false);
  const [playerChoice, setPlayerChoice] = useState(-1);
  const [imageState, setImageState] = useState(-1);
  const [outcomeState, setOutcomeState] = useState(-1);
  

  return (
    <>
      <PlayerThrow selected={selectedState}
        setSelected={setSelectedFn}
        setPlayerChoice={setPlayerChoice}
        playerChoice={playerChoice} />
      <ComputerThrow image={imageState}
        setImage={setImageState}
        selected={selectedState}
        outcomeState={outcomeState}
        setOutcomeState={setOutcomeState} />
      <Outcome outcomeState={outcomeState}
        playerChoice={playerChoice}
        />

      <PlayAgain setSelectedFn={setSelectedFn}
        setImageState={setImageState}
        setOutcomeState={setOutcomeState}
        setPlayerChoice={setPlayerChoice} />
    </>
  )
}

export default App
