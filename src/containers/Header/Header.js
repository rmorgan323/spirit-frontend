import React, { Component } from 'react';
import clearLocalStorage from '../../helpers/clearLocalStorage';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Header.css';

const Header = (props) => {

  return (
    <div className="Header">
      <img className="header-wordmark" src="/assets/Spirit-Wordmark-White.png" alt="SpIRiT-wordmark" />
      {
        props.user &&
        <div>
          <h5 className="header-welcome-user">Welcome, {props.user.name}!</h5>
          <h5 className="header-welcome-clinic">Clinic: {props.user.clinic}</h5>
        </div>
      }
    </div>
  )
}

const mapStateToProps = store => ({
  user: store.user
})

export default connect(mapStateToProps, null)(Header);




