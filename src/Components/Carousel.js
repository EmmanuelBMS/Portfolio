import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import '../Styles/Carousel.css';

function Carousel({ images }) {
  const carousel = useRef();

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  return (
    <div className="carousel-main-div">
      <div className="carousel-images-main-div" ref={carousel}>
        {images.map((image) => {
          const { path, title, id } = image;
          return (
            <div className="carousel-image-div">
              <img src={path} alt={title} key={id} />
            </div>
          );
        })}
      </div>
      <div className="carousel-buttons-div">
        <div className="carousel-button-div left">
          <button
            type="button"
            onClick={handleLeftClick}
          >
            <MdOutlineArrowBackIos />
          </button>
        </div>
        <div className="carousel-button-div right">
          <button
            type="button"
            onClick={handleRightClick}
          >
            <MdOutlineArrowForwardIos />
          </button>
        </div>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      title: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
}.isRequired;

export default Carousel;
