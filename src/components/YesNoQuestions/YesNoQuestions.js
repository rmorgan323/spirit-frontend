import React from 'react';
import './YesNoQuestions.css';
import YesNo from '../../containers/YesNo/YesNo';

const YesNoQuestions = ({ title, questionsArray, databaseNamesArray }) => {

  const display = questionsArray.map((question, index) => {
    return (
      <YesNo
        question={question}
        databaseName={databaseNamesArray[index]}
        key={index}
      />
    )
  })

  return (
    <div className="YesNoQuestions">
      <h4 className="category-title">{title}</h4>
      {display}
    </div>
  )
}

export default YesNoQuestions;