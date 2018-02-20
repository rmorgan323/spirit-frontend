import React from 'react';
import SliderTen from '../SliderTen/SliderTen';
import { PropTypes } from 'prop-types';
import './SessionHeader.css';

const SessionHeader = ({ title, headings, databaseNamesArray }) => {

  const headingsDisplay = headings.map((heading, index) => {
    return (
      <div key={index} className="slider-holder">
        <SliderTen 
          sliderTitle={heading}
          databaseName={databaseNamesArray[index]}
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

SessionHeader.propTypes = {
  title: PropTypes.string,
  headings: PropTypes.array,
  databaseNamesArray: PropTypes.array
};
