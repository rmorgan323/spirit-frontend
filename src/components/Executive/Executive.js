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
        <CategorySliders
          slidersArray={executive.column1.terms}
          databaseNamesArray={executive.column1.db}
        />

        <CategorySliders
          slidersArray={executive.column2A.terms}
          databaseNamesArray={executive.column2A.db}
        />

        <CategorySliders
          slidersArray={executive.column2B.terms}
          databaseNamesArray={executive.column2B.db}
        />

        <CategorySliders
          slidersArray={executive.column3.terms}
          databaseNamesArray={executive.column3.db}
        />

        <CategorySliders
          slidersArray={executive.column4A.terms}
          databaseNamesArray={executive.column4A.db}
        />

        <CategorySliders
          slidersArray={executive.column4B.terms}
          databaseNamesArray={executive.column4B.db}
        />
      </div>
    </div>
  );
};

export default Executive;
