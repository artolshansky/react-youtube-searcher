import React from "react";
import ResultItem from "./ResultItem";

const Results = ({videosState}) => {
    return (
      <ul>
        {
          videosState.videos.map(result => <ResultItem result={result} key={result.etag} />)
        }
      </ul>
    )
  };

export default Results;