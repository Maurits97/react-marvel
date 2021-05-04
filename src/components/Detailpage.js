import { marvelMovies } from '../data/marvelMovies';
import React, { useEffect } from 'react';
import { useParams } from "react-router";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const transition = {duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9]}

function Detailpage() {
  let { id } = useParams();
  let movie = marvelMovies.find(searchMovie);

  function searchMovie(movie) {
    return movie.id === id;
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{
      opacity: 0,
      transition: {transition}}} className="detail">
      <motion.div
        initial={{height: '100vh', opacity: 0.6}} 
        animate={{height: '350px', opacity: 0.4}} 
        transition={transition}
        className="image-wrapper"
        style={{backgroundImage: `url(${movie.image})`}}>
      </motion.div>
      
      <motion.div initial={{opacity: 0}} 
        animate={{
          opacity: 1,
          transition: {delay: 1, ...transition}}} 
        className="detail__info">
          <div className="header__container">
            <h1 className="detail__header">{movie.title}</h1>
            <p className="detail__subheader">{movie.subtitle}</p>
          </div>
          <div className="main-info">
            <Link to="/"><motion.button whileHover={{scale: 1.02}} className="back">back</motion.button></Link>
            <motion.div 
              initial={{y: 10}}
              animate={{y: 0, transition: {delay: 1, ...transition}}}
              className="main-text">
              <p>{movie.text1}</p>
              <p>{movie.text2}</p>
            </motion.div>
            <div className="sub-info">
              <div className="sub-info__element release">
                <p className="sub-info__name">Release</p>
                <p className="sub-info__value">{movie.release}</p>
              </div>
              <div className="sub-info__element chronological">
                <p className="sub-info__name">chronological</p>
                <p className="sub-info__value">{movie.time}</p>
              </div>
              <div className="sub-info__element watchtime">
                <p className="sub-info__name">watchtime</p>
                <p className="sub-info__value">{movie.watchtime}</p>
              </div>

            </div>
          </div>
        
      </motion.div>
    </motion.div>
  );
}

export default Detailpage;
