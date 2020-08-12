import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "../serviceWorker";
import Destination from "./Destinations.js";
const masterDestinationList = [
  {
    city: "Seattle",
    rooms: 2,
    price: 100,
  },
  {
    city: "Portland",
    rooms: 3,
    price: 150,
  },
  {
    city: "Austin",
    rooms: 4,
    price: 2000,
  },
];

function destinationList() {
  return (
    <React.Fragment>
      <hr />
      {masterDestinationList.map((destination, index) => (
        <Destination
          city={destination.city}
          rooms={destination.rooms}
          price={destination.price}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}
