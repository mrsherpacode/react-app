import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

//initailState
const initialState = {
  questions: [],
  // Loading, Error, Ready, Active, Finished
  status: "Loading",
  curIndex: 0,
  answer: null,
  points: 0,
};
// reducer function

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "Ready" };
    case "dataFailed":
      return { ...state, status: "Error" };
    case "start":
      return { ...state, status: "Active" };
    case "newAnswer":
      const question = state.questions.at(state.curIndex);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    default:
      throw new Error("action unknown");
  }
}

function App() {
  // useReducer() hook, i'm distructuring the questions and status here  cuz that's the initial state
  const [{ questions, status, curIndex, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestions = questions.length;
  //   {
  //     /*using useEffect hook because i'm getting data on the mount(initial render)  */
  //   }
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "Error" && <Error />}
        {status === "Ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "Active" && (
          <Question
            question={questions[curIndex]}
            dispatch={dispatch}
            answer={answer}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
