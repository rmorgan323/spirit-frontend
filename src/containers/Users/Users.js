import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './Users.css';

const Users = props => {
  if (props.user.id) {
    const userId = props.user.id;
    props.history.push(`/spirit/users/${userId}/`);
  }

  return <div />;
};

const mapStateToProps = store => ({
  user: store.user
});

export default connect(mapStateToProps, null)(Users);

Users.propTypes = {
  user: PropTypes.object,
  histroy: PropTypes.object
};
