import React from 'react';
import './App.css';
import movies from './sampleData.js';
import MovieList from './MovieList.js';

class App extends React.Component{
  render() {
    return ( <MovieList movies={movies}/> );
  }
}

export default App;
