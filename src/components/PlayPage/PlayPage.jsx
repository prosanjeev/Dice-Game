import NumberSelector from '../all Small components/NumberSelector'
import RollDice from '../all Small components/RollDice'
import TotalScore from '../all Small components/TotalScore'
import Button from '../all Small components/Button';
import './PlayPage.css'
import React, { useState } from "react";
import Rules from '../all Small components/Rules';


const PlayPage = () => {
  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState()
  const [showRules, setShowRules] = useState(false)


  const generateRandomNumber = (min, max) => {
    const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return newRandomNumber;
  };

  const rolldice = () => {
    if(!selectedNumber) {
      setError("You have not selected any number");
      return;
    } 

    const newRandomNumber = generateRandomNumber(1, 6);
    setCurrentDice(newRandomNumber);

    if(selectedNumber==newRandomNumber){
        setScore((prev)=> prev+newRandomNumber)
    }
    else{
        setScore((prev)=> prev-2)
    }
    setSelectedNumber(undefined)  
  };

  const resetScore = () => {
    setScore(0);
  } 


  return (
    <div className='playpage-main'>
      <div className="upper-contant">
      <TotalScore score={score} />
      <NumberSelector setError={setError}
      error={error}
       selectedNumber={selectedNumber}  setSelectedNumber={setSelectedNumber}
      />
      </div>
     
      <RollDice        currentDice={currentDice}   rolldice ={rolldice} />

      <div className='buttons'>
       <Button onClick={resetScore}
       text="Reset Score"  />
       <Button onClick={() => setShowRules(!showRules)} text={showRules ? 'Hide Rules' : 'Show Rules'} />
      </div>
      { showRules && <Rules/>} 
    </div>
    
  )

}

export default PlayPage