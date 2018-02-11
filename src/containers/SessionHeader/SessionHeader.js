import React, { Component } from 'react';
import SliderTen from '../SliderTen/SliderTen';
import './SessionHeader.css';

const SessionHeader = ({ title, headings }) => {

  const headingsDisplay = headings.map((heading, index) => {
    return (
      <div className="slider-holder">
        <SliderTen 
          sliderTitle={heading}
          key={index}
        />
      </div>
    )
  })

  return (
    <div className="SessionHeader">
      <h3 className="session-title">{title}</h3>
      {headingsDisplay}
    </div>
  )
}

export default SessionHeader;