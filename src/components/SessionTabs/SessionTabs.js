import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './SessionTabs.css';

const SessionTabs = props => {
  const { selectedProcess } = props;
  const navNames = [
    'sam',
    'modulation',
    'postural',
    'sensory',
    'social',
    'executive'
  ];

  const navHeader = [
    'SAM',
    'Modulation',
    'Postural',
    'Sensory',
    'Social',
    'Executive'
  ];

  const navLinks = navNames.map((link, index) => {
    const currentClass = selectedProcess[link]
      ? `session-tabs session-tab-${link} thread-connection`
      : `session-tabs session-tab-${link}`;
    return (
      <NavLink
        to={`/spirit/sessions/:sessionId/${link}`}
        className={currentClass}
      >
        <h2>{navHeader[index]}</h2>
      </NavLink>
    );
  });

  return <div className="SessionTabs">{navLinks}</div>;
};

export const mapStateToProps = store => ({
  selectedProcess: store.selectedProcess
});

export default connect(mapStateToProps, null)(SessionTabs);
