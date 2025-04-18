// *1
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { App } from "./components/App";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// *2
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { Provider } from "react-redux"; // 1. Імпортуємо провайдер
import { store } from "./redux/store"; // 2. Імпортуємо створений раніше стор

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
