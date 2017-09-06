import React from "react";
import ResultItem from "./ResultItem";
import PropTypes from "prop-types";

const Results = ({videosState}) =>
  <ul>
    {
      videosState.videos.map(result => <ResultItem result={result} key={result.etag} />)
    }
  </ul>;

Results.PropTypes = {
  videosState: PropTypes.shape({
    videos: PropTypes.array.isRequired,
    error: PropTypes.string
  })
};

export default Results;