import { marvelMovies } from './data/marvelMovies';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Marvel Cinematic Universe Movies</h1>
      {marvelMovies.map((movie) => <p>{movie.title}</p>)}
    </div>
  );
}

export default App;
