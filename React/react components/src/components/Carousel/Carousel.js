import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ slides, autoplay = true, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let intervalId;

    if (autoplay) {
      intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, interval);
    }

    return () => {
      if (autoplay) {
        clearInterval(intervalId);
      }
    };
  }, [activeIndex, autoplay, interval, slides.length]);

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={goToPrevSlide}>&#10094;</button>
      <button className="next" onClick={goToNextSlide}>&#10095;</button>
      <div className="indicators">
        {slides.map((slide, index) => (
          <span
            key={index}
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
