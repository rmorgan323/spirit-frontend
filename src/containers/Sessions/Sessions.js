import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/index';
import './Sessions.css';

export const Sessions = (props) => {
  const { selectedConcern } = props;
  console.log(selectedConcern.id)

  const renderedSessions = props.sessions.map(session => {
    return (
      <div className="session">
        <span className="session-number">Session {session.id}</span>
        <span className="session-date">Last updated: {session.updated_at}</span>
        <span className="session-status">{session.completed ? 'Completed' : 'In Progress'}</span>
        <Link to={`/spirit/sessions/${session.id}/sam`}>
          <button
            className="select-session-button"
            onClick={() => props.getSession(session)}
          >
            SELECT
          </button>
        </Link>
      </div>
    )
  });

  return (
    <div className="Sessions">
      <h1>Sessions</h1>
      {renderedSessions}
      <button onClick={() => props.createSession(selectedConcern.id)} className="create-session">Create New Session</button>
    </div>
  )
}

const mapStateToProps = store => ({
  selectedConcern: store.selectedConcern,
  sessions: store.sessions
})

const mapDispatchToProps = dispatch => ({
  createSession: selectedConcernId => dispatch(actions.createSession(selectedConcernId)),
  getSession: selectedSessionId => dispatch(actions.getSession(selectedSessionId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sessions);