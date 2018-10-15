import React from 'react';
import _ from 'lodash';
import Movie from './movie.js';

class MovieList extends React.Component {
  render () {
    return (<div className="MovieList">
      {_.map(this.props.movies, (movie, index) => {
        return ( <Movie key={index} movie={movie}/> );
      })
      }
    </div>)
  }
}

export default MovieList;