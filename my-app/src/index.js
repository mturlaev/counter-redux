import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const initalState = {
  count: 0,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "plus":
      return {
        ...state,
        count: state.count + 1,
      };

    case "minus":
      if (state.count > 0) {
        return {
          ...state,
          count: state.count - 1,
        };
      }

    case "reset":
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
