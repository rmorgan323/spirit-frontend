import React from 'react';
import { connect } from 'react-redux';
import ConcernRow from '../ConcernRow/ConcernRow';

const Concerns = (props) => {

  let displayConcernRows;
  
  if (props.patientConcerns.length) {
    displayConcernRows = props.patientConcerns.map((concern, index) => {
      return (
        <ConcernRow 
          concern={concern.concern}
          d1={concern.d1}
          d2={concern.d2}
          d3={concern.d3}
          d4={concern.d4}
          d5={concern.d5}
          d6={concern.d6}
          notes={concern.notes}
          key={index}
        />
      )
    })
  }

  return (
    <div>
      {displayConcernRows}
    </div>
  )
}

const mapStateToProps = store => ({
  patientConcerns: store.patientConcerns
})

export default connect(mapStateToProps, null)(Concerns);