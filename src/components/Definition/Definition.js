/*eslint-disable no-useless-escape*/

import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './Definition.css';

const Definition = props => {
  let relevantDefinitions;
  let display;
  const firstWord = new RegExp(/^([\w\-]+)/);

  if (props.definitions.length) {
    relevantDefinitions = props.definitions.filter(def => {
      return (
        def.term.match(firstWord)[0].toLowerCase() ===
        props.title.match(firstWord)[0].toLowerCase()
      );
    });

    if (!relevantDefinitions.length) {
      relevantDefinitions = [{ term: 'No Definitions Found', definition: '' }];
    }

    display = relevantDefinitions.map((def, index) => {
      return (
        <div key={index}>
          <h5>{def.term}</h5>
          <p>{def.definition}</p>
          <hr />
        </div>
      );
    });
  }

  return <div className="Definition">{display}</div>;
};

const mapStateToProps = store => ({
  definitions: store.definitions
});

export default connect(mapStateToProps, null)(Definition);

Definition.propTypes = {
  definitions: PropTypes.object,
  title: PropTypes.string
};
