import React, { Component } from "react";
import Loader from "./Loader";
import Search from "../containers/SearchContainer";

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

export default App;