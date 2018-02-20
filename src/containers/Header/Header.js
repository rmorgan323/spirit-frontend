import React from 'react';
import { connect } from 'react-redux';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {

  return (
    <div className="Header">
      <Link to="/spirit/index">
        <img className="header-wordmark" src="/assets/Spirit-Wordmark-White.png" alt="SpIRiT-wordmark" />
      </Link>
      {
        props.user.name &&
        <div>
          <Link to={`/spirit/users/${props.user.id}`}>
            <h5 className="header-welcome-user">Welcome, {props.user.name}!</h5>
          </Link>
          <h5 className="header-welcome-clinic">Clinic: {props.user.clinic}</h5>
        </div>
      }

      {
        !props.user.name &&
        <div>
          <a href="https://spirit.e1.loginrocket.com/login"><h5 className="login-link">LOGIN</h5></a>
        </div>
      }
    </div>
  )
}

const mapStateToProps = store => ({
  user: store.user
})

export default connect(mapStateToProps, null)(Header);




