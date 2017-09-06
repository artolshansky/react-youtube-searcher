import React, { Component } from "react";
import Loader from "./Loader";
import Search from "../containers/SearchContainer";
import PropTypes from "prop-types";

class App extends Component {
  render() {
    const { children, searchState } = this.props;
    return (
      <div className="container">
        <Search {...this.props} />
        <Loader isInProgress={searchState.isFetching} />
        {children}
      </div>
    )
  }
}

App.PropTypes = {
  children: PropTypes.element.isRequired,
  searchState: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    query: PropTypes.string.isRequired,
    error: PropTypes.string
  }),
  videosState: PropTypes.shape({
    videos: PropTypes.array.isRequired,
    error: PropTypes.string
  })
};

export default App;