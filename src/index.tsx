import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import "./common/i18n/i18n";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import ReduxStore from "./store/RootReducer";

const persistor: any = persistStore(ReduxStore);

ReactDOM.render(
  <Provider store={ReduxStore}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
