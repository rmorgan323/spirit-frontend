import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import authLogin from '../../helpers/authLogin';
import { PropTypes } from 'prop-types';
import './Header.css';

export const Header = props => {
  const { name, id, clinic } = props.user;

  return (
    <div className="Header">
      <Link to="/spirit/index">
        <img
          className="header-wordmark"
          src="/assets/Spirit-Wordmark-White.png"
          alt="SpIRiT-wordmark"
        />
      </Link>

      {name && (
        <div>
          <Link to={`/spirit/users/${id}`}>
            <h5 className="header-welcome-user">Welcome, {name}!</h5>
          </Link>
          <h5 className="header-welcome-clinic">
            {clinic ? `Clinic: ${clinic}` : `Join a clinic below!`}
          </h5>
        </div>
      )}

      {!name && (
        <div>
          <a href={authLogin}>
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

export default connect(
  mapStateToProps,
  null
)(Header);

Header.propTypes = {
  user: PropTypes.object
};
