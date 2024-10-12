import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import 'assets/fontawesome.css';
import "./../node_modules/font-awesome/css/font-awesome.min.css";
// import '~font-awesome/scss/font-awesome.scss';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/reducer/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

