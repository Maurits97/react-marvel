import { marvelMovies } from './data/marvelMovies';
import React from 'react';

function App() {

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>{marvelMovies.one.title}</p>
    </div>
  );
}

export default App;
