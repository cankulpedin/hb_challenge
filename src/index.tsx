import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./common/i18n/i18n";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import ReduxStore from "./store/RootReducer";

ReactDOM.render(
  <Provider store={ReduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
