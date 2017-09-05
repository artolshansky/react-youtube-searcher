import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import App from "../components/App";

const mapStateToProps = state => {
  return {
    searchState: state.searchState,
    videosState: state.videosState
  }
};

export default withRouter(connect(mapStateToProps)(App));