import React from "react";
import PropTypes from "prop-types";

const Movie = ({match}) =>
  <div className="embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${match.params.movieId}?autoplay=1`}
            frameBorder="0"
            allowFullScreen>
    </iframe>
  </div>;

Movie.PropTypes = {
  match: PropTypes.object.isRequired
};

export default Movie;