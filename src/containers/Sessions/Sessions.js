import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import moment from 'moment';
import * as actions from '../../actions/index';
import './Sessions.css';
import GoalsChart from '../../components/GoalsChart/GoalsChart';
import SessionsComparison from '../../components/SessionsComparison/SessionsComparison';

export class Sessions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedIds: []
    }
  }

  toggleCheckBox = (id) => {
    const currentState = this.state.checkedIds;
    if (currentState.includes(id)) {
      let newState = currentState.filter(num => num !== id).sort((a, b) => a - b);
      this.setState({ checkedIds: newState })
    } else {
      let newState = [...currentState, id].sort((a, b) => a - b);
      this.setState({ checkedIds: newState })
    }
  }

  checkedStatus = (id) => {
    const currentState = this.state.checkedIds;
    if (currentState.includes(id)) {
      return true;
    } else {
      return false;
    }
  }

  renderCheckBox = (id, completed) => {
    if (completed) {
      return ( 
        <label className="compare-button-holder">
          <input type="checkbox" checked={this.checkedStatus(id) ? true : false} onChange={() => this.toggleCheckBox(id)} /> 
          <span className="checkmark"></span>
        </label>
      )
    }
  }

  renderedSessions = () => {
    const renderThis = this.props.sessions.map(session => {
      return (
        <div className="session" key={session.id}>
          <div className="compare-button-holder">
            {this.renderCheckBox(session.id, session.completed)}
          </div>
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
              onClick={() => this.props.getSession(session)}
            >
              SELECT
            </button>
          </Link>
        </div>
      );
    })
    return renderThis;
  };

  compareButton = () => {
    if (this.state.checkedIds.length >= 2) {
      return (
        <button
          className="compare-sessions-button"
          onClick={() => this.props.compareSessionData(this.state.checkedIds)}
        >Compare Sessions</button>
      )
    }
  }

  compareTherapyGoals = () => {
    if (Object.keys(this.props.comparisonData).length) {
      return (
        <div>
          <div className="goals-chart">
            <GoalsChart />
          </div>
          <SessionsComparison />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="Sessions">
        <div className="sessions-main-holder">
          <h3>Sessions</h3>
          {this.renderedSessions()}
          <div className="button-holder">
            <button
              onClick={() => this.props.createSession(this.props.selectedConcern.id)}
              className="create-session-button"
            >
              Create New Session
            </button>
            {this.compareButton()}
          </div>
        </div>
        {this.compareTherapyGoals()}
      </div>
    );
  }
};

const mapStateToProps = store => ({
  comparisonData: store.comparisonData,
  selectedConcern: store.selectedConcern,
  sessions: store.sessions
});

const mapDispatchToProps = dispatch => ({
  createSession: selectedConcernId =>
    dispatch(actions.createSession(selectedConcernId)),
  getSession: selectedSessionId =>
    dispatch(actions.getSession(selectedSessionId)),
  compareSessionData: idArray =>
    dispatch(actions.compareSessionData(idArray))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sessions);

Sessions.propTypes = {
  selectedConcern: PropTypes.object,
  sessions: PropTypes.array,
  createSession: PropTypes.func
};
