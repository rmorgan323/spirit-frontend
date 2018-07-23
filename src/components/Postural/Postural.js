import React from 'react';
import SessionHeader from '../SessionHeader/SessionHeader';
import CategorySliders from '../CategorySliders/CategorySliders';
import BodyDiagram from '../../containers/BodyDiagram/BodyDiagram';
import YesNoQuestions from '../YesNoQuestions/YesNoQuestions';
import { postural } from '../../language/language';
import './Postural.css';

const Postural = () => {
  const { header, columns } = postural;

  return (
    <div className="Postural">
      <SessionHeader
        title={header.title}
        headings={header.terms}
        databaseNamesArray={header.db}
      />

      <div className="category-content">
        {Object.keys(columns).map(column => {
          const { type, title, terms, db } = columns[column];

          if (type) {
            if (type === 'YesNo') {
              return (
                <YesNoQuestions
                  title={title}
                  questionsArray={terms}
                  databaseNamesArray={db}
                />
              );
            } else if (type === 'BodyDiagram') {
              return <BodyDiagram />;
            }
          }
          return (
            <CategorySliders
              title={title}
              slidersArray={terms}
              databaseNamesArray={db}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Postural;
