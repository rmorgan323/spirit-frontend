import React from 'react';
import './ConcernRow.css';

const ConcernRow = ({ concern, d1, d2, d3, d4, d5, d6, notes }) => {

  return (
    <div className="ConcernRow">
      <p className="concern-left">{concern}</p>
      <p>
        <span className={ d1 === false ? "domains" : "domains domains-true" }>1</span>
        <span className={ d2 === false ? "domains" : "domains domains-true" }>2</span>
        <span className={ d3 === false ? "domains" : "domains domains-true" }>3</span>
        <span className={ d4 === false ? "domains" : "domains domains-true" }>4</span>
        <span className={ d5 === false ? "domains" : "domains domains-true" }>5</span>
        <span className={ d6 === false ? "domains" : "domains domains-true" }>6</span>
      </p>
      <p className="concern-notes">{notes}</p>
    </div>
  )
}

export default ConcernRow;