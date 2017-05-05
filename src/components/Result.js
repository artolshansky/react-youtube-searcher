import React from 'react';
import Movie from './Movie';
let Link = require('react-router-dom').Link;
let Route = require('react-router-dom').Route;

class Result extends React.Component {
  render(props) {
    let results = this.props.result.body.items;
    return (
      <div>
        <ul>
          {
            results.map(function(result, i) {
              let videoId = result.id.videoId;
              return (
                <Link to={`/movie/${videoId}`} key={i} >
                  <Route path={`/movie/${videoId}`} render={function () {
                      return <Movie result={result}/>
                    }} />
                {
                  `/movie/${videoId}` !== location.pathname && 
                  <li className="row">
                    <img className="col-xs-6 col-sm-3" 
                         src={result.snippet.thumbnails.high.url} 
                         alt={result.snippet.title} 
                    />
                    <span className="col-xs-6 col-sm-9">{result.snippet.title}</span>
                  </li>
                }
                </Link>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Result;