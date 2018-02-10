import React from 'react'
import './CategorySliders.css';
import SliderTen from '../../containers/SliderTen/SliderTen';

const CategorySliders = ({ title, slidersArray }) => {

  const display = slidersArray.map((slider, index) => {
    return (
      <SliderTen 
        sliderTitle={slider}
        key={index}
      />
    )
  })

  return (
    <div className="CategorySliders">
      <h4 className="category-title">{title}</h4>
      {display}
    </div>
  )
}

export default CategorySliders;