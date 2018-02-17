import React from 'react';
import './SessionTabs.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SessionTabs = () => {

  return (
    <div className="SessionTabs">
      <Link to='sam' className={window.location.pathname.split('/')[window.location.pathname.split('/').length - 1] === 'sam' ? "session-tabs session-tab-sam tab-active" : "session-tabs session-tab-sam"} ><h2>SAM</h2></Link>
      <Link to='modulation' className={window.location.pathname.split('/')[window.location.pathname.split('/').length - 1] === 'modulation' ? "session-tabs session-tab-modulation tab-active" : "session-tabs session-tab-modulation"} ><h2>Modulation</h2></Link>
      <Link to='postural' className={window.location.pathname.split('/')[window.location.pathname.split('/').length - 1] === 'postural' ? "session-tabs session-tab-postural tab-active" : "session-tabs session-tab-postural"} ><h2>Postural</h2></Link>
      <Link to='sensory' className={window.location.pathname.split('/')[window.location.pathname.split('/').length - 1] === 'sensory' ? "session-tabs session-tab-sensory tab-active" : "session-tabs session-tab-sensory"} ><h2>Sensory</h2></Link>
      <Link to='social' className={window.location.pathname.split('/')[window.location.pathname.split('/').length - 1] === 'social' ? "session-tabs session-tab-social tab-active" : "session-tabs session-tab-social"} ><h2>Social</h2></Link>
      <Link to='executive' className={window.location.pathname.split('/')[window.location.pathname.split('/').length - 1] === 'executive' ? "session-tabs session-tab-executive tab-active" : "session-tabs session-tab-executive"} ><h2>Executive</h2></Link>
      <Link to='finish' className={window.location.pathname.split('/')[window.location.pathname.split('/').length - 1] === 'finish' ? "session-tabs session-tab-finish tab-active" : "session-tabs session-tab-finish"} ><h2>Finish</h2></Link>
    </div>
  )
}

const mapStateToProps = store => ({
  // selectedSession: store.selectedSession
})

export default connect(mapStateToProps, null)(SessionTabs);