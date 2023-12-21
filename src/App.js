
import './App.css';
import PlayPage from './components/PlayPage/PlayPage';
import StartPage from './components/StartPage/StartPage';
import React, { useState } from "react";

function App() {

  const [isGameStarted, setIsGameStarted]=useState(false)

  const toogleGameStart =()=>{
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
    {isGameStarted ? <PlayPage/> :<StartPage toogle={toogleGameStart} /> }
    </>
  );
}

export default App;
