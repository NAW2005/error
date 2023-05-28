import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./fature/store.js";
import { Provider } from "react-redux";
import "../src/index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
