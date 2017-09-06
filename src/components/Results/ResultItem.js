import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ResultItem = ({result}) => {
  const { videoId } = result.id;
  const { thumbnails, title, description } = result.snippet;
  return (
    <li className="row" key={result.etag}>
      <Link to={`/movie/${videoId}`}  >
        <img className="col-xs-6 col-sm-3"
             src={thumbnails.high.url}
             alt={title}
        />
      </Link>
      <Link to={`/movie/${videoId}`}  >
        <p className="col-xs-6 col-sm-9 video-title">{title}</p>
      </Link>
      <Link to={`/movie/${videoId}`}  >
        <p className="col-xs-6 col-sm-9 video-description">{description}</p>
      </Link>
    </li>
  )
};

ResultItem.PropTypes = {
  result: PropTypes.object.isRequired
};

export default ResultItem;