import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './SessionTabs.css';

const SessionTabs = () => {
  const getPathname = () => {
    return window.location.pathname.split('/')[
      window.location.pathname.split('/').length - 1
    ];
  };

  return (
    <div className="SessionTabs">
      <Link
        to="sam"
        className={
          getPathname() === 'sam'
            ? 'session-tabs session-tab-sam tab-active'
            : 'session-tabs session-tab-sam'
        }
      >
        <h2>SAM</h2>
      </Link>

      <Link
        to="modulation"
        className={
          getPathname() === 'modulation'
            ? 'session-tabs session-tab-modulation tab-active'
            : 'session-tabs session-tab-modulation'
        }
      >
        <h2>Modulation</h2>
      </Link>

      <Link
        to="postural"
        className={
          getPathname() === 'postural'
            ? 'session-tabs session-tab-postural tab-active'
            : 'session-tabs session-tab-postural'
        }
      >
        <h2>Postural</h2>
      </Link>

      <Link
        to="sensory"
        className={
          getPathname() === 'sensory'
            ? 'session-tabs session-tab-sensory tab-active'
            : 'session-tabs session-tab-sensory'
        }
      >
        <h2>Sensory</h2>
      </Link>

      <Link
        to="social"
        className={
          getPathname() === 'social'
            ? 'session-tabs session-tab-social tab-active'
            : 'session-tabs session-tab-social'
        }
      >
        <h2>Social</h2>
      </Link>

      <Link
        to="executive"
        className={
          getPathname() === 'executive'
            ? 'session-tabs session-tab-executive tab-active'
            : 'session-tabs session-tab-executive'
        }
      >
        <h2>Executive</h2>
      </Link>

      <Link
        to="finish"
        className={
          getPathname() === 'finish'
            ? 'session-tabs session-tab-finish tab-active'
            : 'session-tabs session-tab-finish'
        }
      >
        <h2>Finish</h2>
      </Link>
    </div>
  );
};

const mapStateToProps = store => ({
  // selectedSession: store.selectedSession
});

export default connect(mapStateToProps, null)(SessionTabs);
