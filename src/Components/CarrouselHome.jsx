import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

const slides = [
  { id: 1, background: 'https://via.placeholder.com/800x400?text=First+slide' },
  { id: 2, background: 'https://via.placeholder.com/800x400?text=Second+slide' },
  { id: 3, background: 'https://via.placeholder.com/800x400?text=Third+slide' }
];

function CarrouselHome() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (

    <div className="carousel">
      <div className='carousel-controls'></div>
      <button className="carousel-control" onClick={goToPrevious}>
      </button>
      <button className="carousel-control" onClick={goToNext}>
      </button>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="carousel-item"
            style={{ backgroundImage: `url(${slide.background})` }}
          >
          </div>
        ))}
      </div>
      
    </div>

  )
}

export default CarrouselHome
