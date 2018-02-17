import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/index';
import './Sessions.css';

export const Sessions = (props) => {
  const renderedSessions = props.sessions.map(session => {
    return (
      <div className="session">
        <span className="session-number">Session {session.id}</span>
        <span className="session-date">Last updated: {session.updated_at}</span>
        <span className="session-status">{session.completed ? 'Completed' : 'In Progress'}</span>
        <Link to={`/spirit/sessions/${session.id}/sam`}>
          <button
            className="select-session-button"
            onClick={() => console.log('boom')}
          >
            SELECT
          </button>
        </Link>
      </div>
    )
  })
  return (
    <div className="Sessions">
      <h1>Sessions</h1>
      {renderedSessions}
      <button class="create-session">Create New Session</button>
    </div>
  )
}

const mapStateToProps = store => ({
  sessions: store.sessions
})

const mapDispatchToProps = () => ({
  createSession: () => dispatch(actions.createSession())
})

export default connect(mapStateToProps, null)(Sessions);