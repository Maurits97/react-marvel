import { marvelMovies } from '../data/marvelMovies';
import React from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}
const transitionEnter = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]}

function Mainpage() {
  return (
    <motion.div transition={transition} initial={{opacity: 0}} animate={{opacity: 1, transition: transitionEnter}} className="main">
      <h1 className="header">Marvel Cinematic Universe Movies</h1>
      <div className="movies">
        {marvelMovies.map((movie, index) => 
          <div className="movie" key={index}>
            <Link to={movie.id}><motion.div whileHover={{scale: 1.03}} className="movie__image" style={{backgroundImage: `url(${movie.image})`}}></motion.div></Link>
            {/* <Link to={movie.id}><motion.img whileHover={{scale: 1.03}} transition={transition} className="movie__image" src={movie.image} alt={movie.title}/></Link> */}
            <motion.div exit={{opacity: 0}} className="movie__text">
              <h2 className="movie__title">{movie.title}</h2>
              <p className="movie__subtitle">{movie.subtitle}</p>
              <p className="movie__time">{movie.time}</p>
              <p className="movie__release">Release: {movie.release}</p>
              <p className="movie__watchtime">Watchtime: {movie.watchtime}</p>
              <Link to={movie.id}><motion.button whileHover={{scale: 1.03}} className="movie__button" >More Info</motion.button></Link>
            </motion.div>
          </div>
        )}
        <div className="filler"></div>
      </div>
    </motion.div>
  );
}

export default Mainpage;
