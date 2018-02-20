import React from 'react';
import { PropTypes } from 'prop-types';
import SliderTen from '../../containers/SliderTen/SliderTen';
import './CategorySliders.css';

const CategorySliders = ({
  title,
  slidersArray,
  databaseNamesArray,
  reminderAsterisk,
  reminder
}) => {
  const display = slidersArray.map((slider, index) => {
    return (
      <SliderTen
        sliderTitle={slider}
        databaseName={databaseNamesArray[index]}
        reminderAsterisk={reminderAsterisk ? reminderAsterisk[index] : null}
        key={index}
      />
    );
  });

  return (
    <div className="CategorySliders">
      <h4 className="category-title">{title}</h4>
      {display}
      <h5 className="reminder-message">{reminder}</h5>
    </div>
  );
};

export default CategorySliders;

CategorySliders.propTypes = {
  title: PropTypes.string,
  slidersArray: PropTypes.array,
  databaseNamesArray: PropTypes.array,
  reminderAsterisk: PropTypes.array,
  reminder: PropTypes.string
};
