import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  refInput: "",
  cityInput: "",
  restaurants: [],
  refDisplay: "hidden",
  errorMsg: "",
  error: "hidden",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_CITY_INPUT":
      return {
        ...state,
        cityInput: action.citySearch,
      };
    case "CHANGE_RESTAURANTS":
      return {
        ...state,
        restaurants: action.cityRes,
      };
    case "CHANGE_REF_INPUT":
      return {
        ...state,
        refInput: action.refSearch,
      };
    case "CHANGE_HIDDEN":
      return {
        ...state,
        refDisplay: action.display,
      };
    case "CHANGE_ERROR":
      return {
        ...state,
        error: "",
        errorMsg: action.msg,
      };
    case "CHANGE_NO_ERROR":
      return {
        ...state,
        error: "hidden",
        errorMsg: "",
      };

    default:
      return state;
  }
}
const store = createStore(reducer);

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <ReduxApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
