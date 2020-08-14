import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "../serviceWorker";

const Guest = (props) => {
  return <div>{props.available}</div>;
};

export default Guest;
