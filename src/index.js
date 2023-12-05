import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./styles/index.css";
import store from "./utils/redux/store/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
