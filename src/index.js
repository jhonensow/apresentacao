import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Bubbling from "./Bubbling";
import Events from "./Events";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <Bubbling />
    <Events />
  </StrictMode>,
  rootElement
);
