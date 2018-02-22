import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import * as actions from '../../actions';
import './SessionTabs.css';

class SessionTabs extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  getClass = (domain, route, threadConnection) => {
    const { updateThreadDomain } = this.props;
    const { pathname } = this.props.location;

    if (threadConnection && pathname === route) {
      updateThreadDomain(domain);

      return 'session-tabs';
    } else if (threadConnection) {
      return 'session-tabs thread-connection';
    } else {
      return 'session-tabs';
    }
  };

  render() {
    const {
      storedThreadConnections,
      selectedSession,
      updateThreadDomain
    } = this.props;

    const navNames = [
      'sam',
      'modulation',
      'postural',
      'sensory',
      'social',
      'executive',
      'finish'
    ];

    const navHeader = [
      'SAM',
      'Modulation',
      'Postural',
      'Sensory',
      'Social',
      'Executive',
      'Finish'
    ];

    const navLinks = navNames.map((link, index) => {
      const sessionId = selectedSession.id;
      const route = `/spirit/sessions/${sessionId}/${link}`;

      return (
        <NavLink
          key={index}
          to={route}
          className={this.getClass(link, route, storedThreadConnections[link])}
        >
          <h2>{navHeader[index]}</h2>
        </NavLink>
      );
    });

    return <div className="SessionTabs">{navLinks}</div>;
  }
};

export const mapStateToProps = store => ({
  storedThreadConnections: store.storedThreadConnections,
  selectedSession: store.selectedSession
});

export const mapDispatchToProps = dispatch => ({
  updateThreadDomain: domain => {
    dispatch(actions.updateThreadDomain(domain));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionTabs);

SessionTabs.propTypes = {
  storedThreadConnections: PropTypes.object,
  selectedSession: PropTypes.object,
  updateThreadDomain: PropTypes.func
};
