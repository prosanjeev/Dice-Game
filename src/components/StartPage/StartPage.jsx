import { useState } from 'react'
import './StartPage.css'
const StartPage = ({toogle}) => {

  return (
    <div className='start-page-main'>
        <div>
            <img src="/images/dices.png" alt="" />
        </div>
        <div className='start-page-contant'>
            <h1>DICE GAME</h1>
            <button  onClick={toogle} >Play Now</button>
        </div>
    </div>
  )
}

export default StartPage