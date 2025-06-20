import Options from "./Options";
function Question({ question, dispatch, answer }) {
  console.log(question);
  return (
    <div>
      <h4> {question.question}</h4>
      {/* Options is imported from Options component */}
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
