function Finished({ points, maxPoints, highScore, dispatch }) {
  const percent = (points / maxPoints) * 100;
  let emoji;
  if (percent === 100) emoji = "🏆";
  else if (percent >= 80 && percent > 100) emoji = "👍👍";
  else if (percent >= 50 && percent > 80) emoji = "👍";
  else if (percent >= 0 && percent > 50) emoji = "🥲";
  else emoji = "😭";
  return (
    <div>
      <>
        <p className="result">
          <span>{emoji}</span>
          You scored {points} out of {maxPoints} ({Math.ceil(percent)}%)
        </p>
        <p className="highscore">Your HighScore is {highScore}</p>

        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart the Quiz
        </button>
      </>
    </div>
  );
}

export default Finished;
