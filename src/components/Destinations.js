import React from "react";
import PropTypes from "prop-types";

function Destination(props) {
  return (
    <React.Fragment>
      {props.city} - {props.rooms} - {props.price}
    </React.Fragment>
  );
}

Destination.propTypes = {
  city: PropTypes.string,
  rooms: PropTypes.string,
  price: PropTypes.number,
};

export default Destination;
