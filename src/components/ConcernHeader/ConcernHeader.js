/*eslint-disable camelcase*/

import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { PropTypes } from 'prop-types';
import './ConcernHeader.css';

const ConcernHeader = props => {
  let display;
  const {
    id,
    domain_1,
    domain_2,
    domain_3,
    domain_4,
    domain_5,
    domain_6,
    updated_at
  } = props.selectedConcern;

  if (id !== undefined) {
    display = (
      <div className="concern-header-holder">
        <h4>
          CONCERN ID:<span className="concern-header-span">{id}</span>
        </h4>
        <div className="domain-holder">
          <span className={domain_1 === false ? 'display-none' : null}>1</span>
          <span className={domain_2 === false ? 'display-none' : null}>2</span>
          <span className={domain_3 === false ? 'display-none' : null}>3</span>
          <span className={domain_4 === false ? 'display-none' : null}>4</span>
          <span className={domain_5 === false ? 'display-none' : null}>5</span>
          <span className={domain_6 === false ? 'display-none' : null}>6</span>
        </div>
        <h4>
          UPDATED:<span className="concern-header-span">
            {moment(updated_at).format('LL')}
          </span>
        </h4>
      </div>
    );
  }

  return <div className="ConcernHeader">{display}</div>;
};

const mapStateToProps = store => ({
  selectedConcern: store.selectedConcern
});

export default connect(mapStateToProps, null)(ConcernHeader);

ConcernHeader.propTypes = {
  selectedConcern: PropTypes.object
};
