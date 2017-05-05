import React from 'react';

class Movie extends React.Component {
  render(props) {
    let movieId = this.props.result.id.videoId;
    
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" 
                src={`https://www.youtube.com/embed/${movieId}?autoplay=1`} 
                frameBorder="0" 
                allowFullScreen>
        </iframe>
      </div>
    )
  }
}

export default Movie;