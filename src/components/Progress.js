function Progress({ numQuestions, points, curIndex, maxPoints, answer }) {
  return (
    <header className="progress">
      {/* value = if there is answer it will add it to curIndex  */}
      <progress max={numQuestions} value={curIndex + Number(answer !== null)} />
      <p>
        Question {curIndex}/{numQuestions}
      </p>
      <p>
        {points}/{maxPoints}
      </p>
    </header>
  );
}

export default Progress;
