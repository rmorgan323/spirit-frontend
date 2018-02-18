import React from 'react';
import './SessionTabs.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SessionTabs = () => {

  const getPathname = () => {
    return window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]
  }

  return (
    <div className="SessionTabs">
      <Link to='sam' className={getPathname() === 'sam' ? "session-tabs session-tab-sam tab-active" : "session-tabs session-tab-sam"} >
        <h2>SAM</h2>
      </Link>
      <Link to='modulation' className={getPathname() === 'modulation' ? "session-tabs session-tab-modulation tab-active" : "session-tabs session-tab-modulation"} >
        <h2>Modulation</h2>
        <p>1</p>
      </Link>
      <Link to='postural' className={getPathname() === 'postural' ? "session-tabs session-tab-postural tab-active" : "session-tabs session-tab-postural"} >
        <h2>Postural</h2>
        <p>2</p>
      </Link>
      <Link to='sensory' className={getPathname() === 'sensory' ? "session-tabs session-tab-sensory tab-active" : "session-tabs session-tab-sensory"} >
        <h2>Sensory</h2>
        <p>3</p>
      </Link>
      <Link to='social' className={getPathname() === 'social' ? "session-tabs session-tab-social tab-active" : "session-tabs session-tab-social"} >
        <h2>Social</h2>
        <p>4</p>
      </Link>
      <Link to='executive' className={getPathname() === 'executive' ? "session-tabs session-tab-executive tab-active" : "session-tabs session-tab-executive"} >
        <h2>Executive</h2>
        <p>5</p>
      </Link>
      <Link to='finish' className={getPathname() === 'finish' ? "session-tabs session-tab-finish tab-active" : "session-tabs session-tab-finish"} >
        <h2>Finish</h2>
      </Link>
    </div>
  )
}

const mapStateToProps = store => ({
  // selectedSession: store.selectedSession
})

export default connect(mapStateToProps, null)(SessionTabs);