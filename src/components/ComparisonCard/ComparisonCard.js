import React from 'react';
import './ComparisonCard.css';
import moment from 'moment';

const ComparisonCard = ({ dateArray, title, values }) => {

  const dates = dateArray.map(date => {
    return <p>{moment(date).format("MMM D")}</p>
  })

  const dataValues = values.map(val => {

    if (val === false) {
      val = 'no';
    } else if (val === true) {
      val = 'yes';
    } else if (val === null || val === 0 || val === undefined || val === '' || val === '0undefined') {
      val = '-'
    }

    return <p>{val}</p>
  })

  return (
    <div className="ComparisonCard">
      <h5>{title}</h5>
      <hr />
      <div className="card-body">
        <div className="card-dates">
          <p>{dates}</p>
        </div>
        <div className="card-values">
          <p>{dataValues}</p>
        </div>
      </div>
    </div>
  )
}

export default ComparisonCard;