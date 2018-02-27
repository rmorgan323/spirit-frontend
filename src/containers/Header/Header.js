import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './Header.css';

export const Header = props => {
  const { user } = props;

  return (
    <div className="Header">
      <Link to="/spirit/index">
        <img
          className="header-wordmark"
          src="/assets/Spirit-Wordmark-White.png"
          alt="SpIRiT-wordmark"
        />
      </Link>

      {user.name && (
        <div>
          <Link to={`/spirit/users/${user.id}`}>
            <h5 className="header-welcome-user">Welcome, {user.name}!</h5>
          </Link>
          <h5 className="header-welcome-clinic">Clinic: {user.clinic}</h5>
        </div>
      )}

      {!user.name && (
        <div>
          <a href="https://spirit.e1.loginrocket.com/login">
            <h5 className="login-link">LOGIN</h5>
          </a>
        </div>
      )}
    </div>
  );
};

export const mapStateToProps = store => ({
  user: store.user
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  user: PropTypes.object
};
