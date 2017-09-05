import React from "react";

const Movie = ({match}) => {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item"
              src={`https://www.youtube.com/embed/${match.params.movieId}?autoplay=1`}
              frameBorder="0"
              allowFullScreen>
      </iframe>
    </div>
  )
};

export default Movie;