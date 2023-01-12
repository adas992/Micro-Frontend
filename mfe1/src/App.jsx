import React from "react";
import ReactDOM from "react-dom";
import {Test} from "./components/Test";

import "./index.css";

const App = () => (
  <div className="container">
    <h4>MFE 1</h4>
    <Test/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
