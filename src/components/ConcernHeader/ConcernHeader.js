import React from 'react';
import './ConcernHeader.css';
import { connect } from 'react-redux';
import moment from 'moment';

const ConcernHeader = (props) => {

  let display;

  if (props.selectedConcern.id !== undefined) {
    display = (
      <div className="concern-header-holder">
        <h4>CONCERN ID:<span className="concern-header-span">{props.selectedConcern.id}</span></h4>
        <div className="domain-holder">
          <span className={props.selectedConcern.domain_1 === false ? "display-none" : null} >1</span>
          <span className={props.selectedConcern.domain_2 === false ? "display-none" : null} >2</span>
          <span className={props.selectedConcern.domain_3 === false ? "display-none" : null} >3</span>
          <span className={props.selectedConcern.domain_4 === false ? "display-none" : null} >4</span>
          <span className={props.selectedConcern.domain_5 === false ? "display-none" : null} >5</span>
          <span className={props.selectedConcern.domain_6 === false ? "display-none" : null} >6</span>
        </div>
        <h4>UPDATED:<span className="concern-header-span">{moment(props.selectedConcern.updated_at).format('LL')}</span></h4>
      </div>
    )
  }

  return (
    <div className="ConcernHeader">
      {display}
    </div>
  ) 
}

const mapStateToProps = store => ({
  selectedConcern: store.selectedConcern
})

export default connect(mapStateToProps, null)(ConcernHeader);