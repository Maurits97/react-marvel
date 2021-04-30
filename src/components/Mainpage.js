import { marvelMovies } from '../data/marvelMovies';
import React from 'react';
import { Link } from 'react-router-dom'

function Mainpage() {
  return (
    <div className="main">
      <h1 className="header">Marvel Cinematic Universe Movies</h1>
      <div className="movies">
        {marvelMovies.map((movie, index) => 
          <div className="movie" key={index}>
            <img className="movie__image" src={movie.image} alt={movie.title}/>
            <div className="movie__text">
              <h2 className="movie__title">{movie.title}</h2>
              <p className="movie__subtitle">{movie.subtitle}</p>
              <p className="movie__time">{movie.time}</p>
              <p className="movie__release">Release: {movie.release}</p>
              <p className="movie__watchtime">Watchtime: {movie.watchtime}</p>
              <Link to={movie.id}><button className="movie__button" >More Info</button></Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Mainpage;
