import React, { Component } from 'react';
import clearLocalStorage from '../../helpers/clearLocalStorage';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Header.css';

const Header = (props) => {

  return (
    <div className="Header">
      <h1>spirit</h1>
      <h5 className="header-welcome-user">Welcome, {props.user.name}!</h5>
      <h5 className="header-welcome-clinic">Clinic: {props.user.clinic}</h5>
    </div>
  )
}

const mapStateToProps = store => ({
  user: store.user
})

export default connect(mapStateToProps, null)(Header);




