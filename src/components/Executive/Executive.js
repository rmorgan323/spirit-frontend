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
          slidersArray={executive.column1Terms}
          databaseNamesArray={executive.column1DB}
        />

        <CategorySliders
          slidersArray={executive.column2ATerms}
          databaseNamesArray={executive.column2ADB}
        />

        <CategorySliders
          slidersArray={executive.column2BTerms}
          databaseNamesArray={executive.column2BDB}
        />

        <CategorySliders
          slidersArray={executive.column3Terms}
          databaseNamesArray={executive.column3DB}
        />

        <CategorySliders
          slidersArray={executive.column4ATerms}
          databaseNamesArray={executive.column4ADB}
        />

        <CategorySliders
          slidersArray={executive.column4BTerms}
          databaseNamesArray={executive.column4BDB}
        />
      </div>
    </div>
  );
};

export default Executive;
