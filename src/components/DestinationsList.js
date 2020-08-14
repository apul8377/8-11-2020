import React from "react";
import ReactDOM from "react-dom";
import "./../index.css";
import App from "./App";
import * as serviceWorker from "../serviceWorker";
import Destination from "./Destinations.js";
const masterDestinationList = [
  {
    city: "Seattle",
    rooms: 2,
    price: 100,
    available: "yes",
  },
  {
    city: "Portland",
    rooms: 3,
    price: 150,
    available: "yes",
  },
  {
    city: "Austin",
    rooms: 4,
    price: 2000,
    available: "no",
  },
  {
    city: "The Moon",
    rooms: 4,
    price: 2000,
    available: "no",
  },
];

function DestinationList() {
  console.log(<Destination />);
  return (
    <React.Fragment>
      <hr />
      {masterDestinationList.map((destination, index) => (
        //will need to pass the available prop starting here.
        <Destination
          city={destination.city}
          rooms={destination.rooms}
          price={destination.price}
          key={index}
          available={destination.available}
        />
      ))}
    </React.Fragment>
  );
}

export default DestinationList;
