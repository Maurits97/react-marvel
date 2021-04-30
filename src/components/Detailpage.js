import { marvelMovies } from '../data/marvelMovies';
import React from 'react';
import { useParams } from "react-router";

function Detailpage() {
  let { id } = useParams();
  let movie = marvelMovies.find(searchMovie);

  function searchMovie(movie) {
    return movie.id === id;
}

  console.log(movie)

  return (
    <div className="main">
      <p>{movie.title}</p>
    </div>
  );
}

export default Detailpage;
