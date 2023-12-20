import './StartPage.css'
const StartPage = () => {
  return (
    <div className='start-page-main'>
        <div>
            <img src="/images/dices.png" alt="" />
        </div>
        <div className='start-page-contant'>
            <h1>DICE GAME</h1>
            <button>Play Now</button>
        </div>
    </div>
  )
}

export default StartPage