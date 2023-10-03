import React from "react";
import { createRoot } from "react-dom";
import App from "./App";
import "./index.css";
import reducer, {initialState} from "./components/Reducer.jsx";
import { StateProvider } from "./components/StateProvider.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
