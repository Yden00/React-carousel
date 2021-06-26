import React, { useRef, useState } from 'react'
import { CarouselData } from './carouselData'
import './Carousel.css'
import DotsList from './Dots.component'

const Carousel = () => {
  const slides = [...CarouselData]
  const [currentSlides, setCurrentSlides] = useState(slides.slice((slides.length - 3) / 2, (slides.length - 3) / 2 + 3))
  const currentIndex = useRef(Math.floor(slides.length / 2))
  function renderSlide(slide, index) {
    return (
      <li key={index}>
        <h3>{slide.title}</h3>
        <img src={slide.image} />
      </li>
    )
  }

  function displaySlidesRight() {
    if (currentIndex.current === slides.length - 1) {
      currentIndex.current = 0;
      setCurrentSlides([slides[slides.length - 1], slides[currentIndex.current], slides[currentIndex.current + 1]]);
      console.log('Первый if', currentIndex.current);
    }
    else if (currentIndex.current + 2 === slides.length) {
      currentIndex.current++;
      setCurrentSlides([slides[currentIndex.current - 1], slides[currentIndex.current], slides[0]]);
      console.log('Второй if', currentIndex.current);
    }
    else if (currentIndex.current < slides.length - 2) {
      currentIndex.current++;
      setCurrentSlides([slides[currentIndex.current - 1], slides[currentIndex.current], slides[currentIndex.current + 1]]);
      console.log('Третий if', currentIndex.current);
    }
  }

  function displaySlidesLeft() {
    if (currentIndex.current === 0) {
      currentIndex.current = slides.length - 1;
      setCurrentSlides([slides[slides.length - 2], slides[currentIndex.current], slides[0]])
      console.log('Первый if', currentIndex.current)
    }
    else if (currentIndex.current === 1) {
      currentIndex.current--
      setCurrentSlides([slides[slides.length - 1], slides[currentIndex.current], slides[currentIndex.current + 1]])
      console.log('Второй if', currentIndex.current)
    }
    else if (currentIndex.current <= slides.length - 1) {
      currentIndex.current--
      setCurrentSlides([slides[currentIndex.current - 1], slides[currentIndex.current], slides[currentIndex.current + 1]])
      console.log('Третий if', currentIndex.current)
    }
  }

  return (
    <div className='carousel'>
      <ul>
        <button className="left" onClick={displaySlidesLeft}></button>
        {
          currentSlides.map((el, index) => renderSlide(el, index))
        }
        <button className="right" onClick={displaySlidesRight}></button>
      </ul>
      <DotsList />
    </div>
  )
}

export default Carousel
