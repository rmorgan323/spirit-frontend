import React from 'react';
import SessionHeader from '../SessionHeader/SessionHeader';
import CategorySliders from '../CategorySliders/CategorySliders';
import { executive } from '../../language/language';
import './Executive.css';

const Executive = () => {
  return (
    <div className="Executive">
      <SessionHeader title={executive.header} headings={[]} />
      <div className="category-content">
        {Object.keys(executive.columns).map(column => {
          const { terms, db } = executive.columns[column];

          return (
            <CategorySliders slidersArray={terms} databaseNamesArray={db} />
          );
        })}
      </div>
    </div>
  );
};

export default Executive;
