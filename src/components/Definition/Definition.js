import React from 'react';
import './Definition.css';
import { connect } from 'react-redux';

const Definition = (props) => {
  let relevantDefs;
  let display;
  const firstWord = new RegExp(/^([\w\-]+)/);

  if (props.definitions.length) {
    relevantDefs = props.definitions.filter(def => {
      return def.term.match(firstWord)[0].toLowerCase() === props.title.match(firstWord)[0].toLowerCase()
    })
    !relevantDefs.length ? relevantDefs = [{term: 'No Definitions Found', definition: ''}] : null
    display = relevantDefs.map(def => {
      return (
        <div>
          <h5>{def.term}</h5>
          <p>{def.definition}</p>
          <hr />
        </div>
      )
    })
  }

  return (
    <div className="Definition">
      {display}
    </div>
  )
}

const mapStateToProps = store => ({
  definitions: store.definitions
})

export default connect(mapStateToProps, null)(Definition);