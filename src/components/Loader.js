import React from "react";

const Loader = ({isInProgress}) => isInProgress &&
  <div className="center">
    <div className="loader" />
  </div>;

export default Loader;