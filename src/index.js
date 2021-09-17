import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Lesson from "./Lesson";
import Practice from "./Practice";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Lesson />
    <br />
    <Practice />
  </StrictMode>,
  rootElement
);
