import { useEffect } from "react";

function Timer({ dispatch, secondRemaining }) {
  // calculating minute
  const mins = Math.floor(secondRemaining / 60);
  // calculating second
  const sec = Math.floor(secondRemaining % 60);

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      //  this is a cleanup function
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins} : {sec < 10 && "0"} {sec}
    </div>
  );
}

export default Timer;
