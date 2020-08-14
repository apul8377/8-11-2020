import React from "react";
import PropTypes from "prop-types";
import Guests from "./Guests.js";
//import a child component here

function Destination(props) {
  console.log(props);
  return (
    //render that child component here
    //pass the props to it (city, rooms, price)
    <React.Fragment>
      {props.city} - {props.rooms} - {props.price}
      <a href={props.available}>
        show availability <br />
      </a>
      <Guests available={props.available} />
    </React.Fragment>
  );
}

Destination.propTypes = {
  city: PropTypes.string,
  rooms: PropTypes.string,
  price: PropTypes.number,
  available: PropTypes.string,
};

export default Destination;
