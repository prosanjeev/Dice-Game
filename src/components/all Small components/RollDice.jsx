import './RollDice.css';


const RollDice = ({currentDice, rolldice}) => {
    
  return (
    <div className='diceroll-main'>
      <div className='diceroll-img' onClick={rolldice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </div>
  );
};

export default RollDice;

