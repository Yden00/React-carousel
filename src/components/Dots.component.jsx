import React from 'react'
import { CarouselData } from './carouselData'
import './Dots.css'

const DotsList = (props) => {
  return (
    <ul className="dots-list">
      {
        CarouselData.map((el,index) => {
          <li></li>
        })
      }
    </ul>
  )
}

export default DotsList