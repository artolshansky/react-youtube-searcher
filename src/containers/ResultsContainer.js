import { connect } from "react-redux";
import Results from "../components/Results/Results";

const mapStateToProps = (state) => {
  return {
    searchState: state.searchState,
    videosState: state.videosState
  }
};

export default connect(mapStateToProps)(Results);