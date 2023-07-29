import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import '../Styles/Carousel.css';

function Carousel({ images }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <motion.div className="carousel-main-div" ref={carousel} whileTap={{ cursor: 'grabbing' }}>
      <motion.div
        className="carousel-inner-div"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {images.map((image) => {
          const {
            path, id, tittle, from,
          } = image;
          return (
            <motion.div key={id} className={`${from}-img-div`}>
              <img src={path} alt={tittle} draggable="false" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    id: PropTypes.number,
    tittle: PropTypes.string,
    from: PropTypes.string,
  })).isRequired,
};

export default Carousel;
