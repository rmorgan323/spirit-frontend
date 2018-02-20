import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import moment from 'moment';
import * as actions from '../../actions/index';
import './Sessions.css';

export const Sessions = props => {
  const { selectedConcern } = props;

  const renderedSessions = props.sessions.map(session => {
    return (
      <div className="session" key={session.id}>
        <p className="session-number">Session {session.id}</p>

        <p className="session-date">
          <span className="date-span">Last update: </span>
          {moment(session.updated_at).format('LL')}
        </p>

        <p className="session-status">
          {session.completed ? 'Completed' : 'In Progress'}
        </p>

        <Link to={`/spirit/sessions/${session.id}/sam`}>
          <button
            className="select-session-button"
            onClick={() => props.getSession(session)}
          >
            SELECT
          </button>
        </Link>
      </div>
    );
  });

  return (
    <div className="Sessions">
      <h3>Sessions</h3>
      {renderedSessions}
      <button
        onClick={() => props.createSession(selectedConcern.id)}
        className="create-session-button"
      >
        Create New Session
      </button>
    </div>
  );
};

const mapStateToProps = store => ({
  selectedConcern: store.selectedConcern,
  sessions: store.sessions
});

const mapDispatchToProps = dispatch => ({
  createSession: selectedConcernId =>
    dispatch(actions.createSession(selectedConcernId)),
  getSession: selectedSessionId =>
    dispatch(actions.getSession(selectedSessionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sessions);

Sessions.propTypes = {
  selectedConcern: PropTypes.object,
  sessions: PropTypes.array,
  createSession: PropTypes.func
};
