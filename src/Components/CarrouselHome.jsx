import React from "react";
import { useState } from "react";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";

const slides = [
  { id: 1, background: slide1 },
  { id: 2, background: slide2 },
  { id: 3, background: slide3 },
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
      <div className="carousel-controls">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="carousel-control bi bi-chevron-left"
          viewBox="0 0 16 16"
          onClick={goToPrevious}
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="carousel-control bi bi-chevron-right"
          viewBox="0 0 16 16"
          onClick={goToNext}
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
          />
        </svg>
      </div>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-item">
            <img src={slide.background} alt={`Slide ${slide.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarrouselHome;
