import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./components/App";
// import "./index.css";
import Parent from "./components/BackAccount";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Parent />
  </React.StrictMode>
);
