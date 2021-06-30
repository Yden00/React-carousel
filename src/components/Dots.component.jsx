import React, { useState } from 'react'
import { CarouselData } from './carouselData'
import './Dots.css'

const DotsList = (props) => {
    function goTo(index) {
    props.changeCurrentIndex(index)
  }
  return (
    <ul className="dots-list">
      {
        CarouselData.map((el, index) => {
          if (index === props.currentIndex) {
            return <li className="current-dot" onClick={() => { goTo(index) }} key={index}></li>
          }
          else {
            return <li className="dot" onClick={() => { goTo(index) }} key={index}></li>
          }
        }
        )
      }
    </ul>
  )
}

export default DotsList