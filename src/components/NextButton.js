//The next button will only appear if there is a answer.
function NextButton({ dispatch, answer, curIndex, numQuestions }) {
  if (answer === null) return null;
  // If the curIndex is last question then don't show the next button.
  if (curIndex < numQuestions - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "newQuestion" })}
        >
          Next
        </button>
      </div>
    );
  // if the curIndex is last question then show the finish button.
  if (curIndex === numQuestions - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finished" })}
        >
          Finish
        </button>
      </div>
    );
}

export default NextButton;
