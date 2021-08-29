import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";
import "./assets/index.scss";

const root = document.querySelector("#root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
