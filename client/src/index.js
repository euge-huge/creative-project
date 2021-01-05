import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./store";

import App from "./App";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.Suspense>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Suspense>,
  document.getElementById("root")
);
