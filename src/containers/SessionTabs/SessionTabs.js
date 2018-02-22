import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './SessionTabs.css';

const SessionTabs = props => {
  const { storedThreadConnections, selectedSession } = props;
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

  const getClass = (route, threadConnection) => {
    const { pathname } = props.location;
    console.log(pathname)

    if (threadConnection && pathname === route) {
      return 'session-tabs';
    } else if (threadConnection) {
      return 'session-tabs thread-connection';
    } else {
      return 'session-tabs';
    }
  };

  const navLinks = navNames.map((link, index) => {
    const sessionId = selectedSession.id;
    const route = `/spirit/sessions/${sessionId}/${link}`;

    return (
      <NavLink
        key={index}
        to={route}
        className={getClass(route, storedThreadConnections[link])}
      >
        <h2>{navHeader[index]}</h2>
      </NavLink>
    );
  });

  return <div className="SessionTabs">{navLinks}</div>;
};

export const mapStateToProps = store => ({
  storedThreadConnections: store.storedThreadConnections,
  selectedSession: store.selectedSession
});

export const mapDispatchToProps = dispatch => ({
  updateThreadDomain: domain => dispatch(updateThreadDomain(domain))
})

export default connect(mapStateToProps, null)(SessionTabs);

SessionTabs.propTypes = {
  storedThreadConnections: PropTypes.object,
  selectedSession: PropTypes.object
};
