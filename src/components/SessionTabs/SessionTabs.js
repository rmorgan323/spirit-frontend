import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './SessionTabs.css';

const SessionTabs = () => {
  const getPathname = () => {
    return window.location.pathname.split('/')[
      window.location.pathname.split('/').length - 1
    ];
  };

  const navLinks = [ 'sam', 'modulation', 'postural', 'sensory', 'social', 'executive' ]

  return (
    <div className="SessionTabs">
      <NavLink
        to="/spirit/sessions/:sessionId/sam"
        className='session-tabs session-tab-sam'
      >
        <h2>SAM</h2>
      </NavLink>

      <NavLink
        to="/spirit/sessions/:sessionId/modulation"
        className={
          getPathname() === 'modulation'
            ? 'session-tabs session-tab-modulation tab-active'
            : 'session-tabs session-tab-modulation'
        }
      >
        <h2>Modulation</h2>
      </NavLink>

      <NavLink
        to="/spirit/sessions/:sessionId/postural"
        className={
          getPathname() === 'postural'
            ? 'session-tabs session-tab-postural tab-active'
            : 'session-tabs session-tab-postural'
        }
      >
        <h2>Postural</h2>
      </NavLink>

      <NavLink
        to="/spirit/sessions/:sessionId/sensory"
        className={
          getPathname() === 'sensory'
            ? 'session-tabs session-tab-sensory tab-active'
            : 'session-tabs session-tab-sensory'
        }
      >
        <h2>Sensory</h2>
      </NavLink>

      <NavLink
        to="/spirit/sessions/:sessionId/social"
        className={
          getPathname() === 'social'
            ? 'session-tabs session-tab-social tab-active'
            : 'session-tabs session-tab-social'
        }
      >
        <h2>Social</h2>
      </NavLink>

      <NavLink
        to="/spirit/sessions/:sessionId/executive"
        className={
          getPathname() === 'executive'
            ? 'session-tabs session-tab-executive tab-active'
            : 'session-tabs session-tab-executive'
        }
      >
        <h2>Executive</h2>
      </NavLink>

      <NavLink
        to="/spirit/sessions/:sessionId/finish"
        className={
          getPathname() === 'finish'
            ? 'session-tabs session-tab-finish tab-active'
            : 'session-tabs session-tab-finish'
        }
      >
        <h2>Finish</h2>
      </NavLink>
    </div>
  );
};

export const mapStateToProps = store => ({
  selectedProcess: store.selectedProcess
})

export default connect(mapStateToProps, null)(SessionTabs);
