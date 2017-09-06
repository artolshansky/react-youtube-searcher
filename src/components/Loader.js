import React from "react";
import PropTypes from "prop-types";

const Loader = ({isInProgress}) => isInProgress &&
  <div className="center">
    <div className="loader" />
  </div>;

Loader.PropTypes = {
  isInProgress: PropTypes.bool.isRequired
};

export default Loader;