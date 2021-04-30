import { marvelMovies } from '../data/marvelMovies';
import React from 'react';
import { useParams } from "react-router";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]}

function Detailpage( { imageDetails }) {
  let { id } = useParams();
  let movie = marvelMovies.find(searchMovie);

  function searchMovie(movie) {
    return movie.id === id;
  }

  return (
    <motion.div initial="initial" animate="animate" exit={{
      opacity: 0,
      transition: {...transition}}} className="detail">
      <motion.div 
        initial={{
          x: '20%',
          y: '45%',
          opacity: 1, 
          width: imageDetails.width, 
          height: imageDetails.height}} 
        animate={{
            x: 0,
            y: 0,
            opacity: 0.6,
            width: '100%',
            transition: {delay: .2, ...transition}
          }}
         
        className="image-wrapper"
        style={{backgroundImage: `url(${movie.image})`}}>
      </motion.div>
      
      <motion.div initial={{opacity: 0}} 
        animate={{
          opacity: 1,
          transition: {delay: 1.4, ...transition}}} 
        className="detail__info">
        <h1>{movie.title}</h1>
        <Link to="/">back</Link>
      </motion.div>
    </motion.div>
  );
}

export default Detailpage;
