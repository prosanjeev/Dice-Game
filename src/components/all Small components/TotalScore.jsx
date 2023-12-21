import './TotalScore.css'

const TotalScore = ({score}) => {
  return (
    <>
    <div className="totalscore-main">
        <h1>{score}</h1>
        <p>Total Score</p>
    </div>
    </>
  )
}

export default TotalScore