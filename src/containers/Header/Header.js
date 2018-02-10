import React, { Component } from 'react';
import clearLocalStorage from '../../helpers/clearLocalStorage';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Header.css';

class Header extends Component {

  componentDidMount = async () => {
    await this.checkForKey();
    await this.props.getUser();
  }

  checkForKey = () => {
    const key = localStorage.getItem('spirit-token-987');
    if (window.location.search.length > 200) {
      const token = this.getToken();
      localStorage.setItem('spirit-token-987', token);
    } else if (key) {
      return;
    } else {
      clearLocalStorage();
      window.location="https://spirit.e1.loginrocket.com/";
      return;
    }
  }

  getToken = () => {
    const removeFront = new RegExp(/\?token=/);
    const removeBack = new RegExp(/\&signup=true/);
    const parse = window.location.search.replace(removeFront, '');
    const parseEnd = parse.replace(removeBack, '')

    return parseEnd;
  }

  render() {
    return (
      <div className="Header">
        <h1>spirit</h1>
        <h5 className="header-welcome">Welcome, {this.props.user.name}!</h5>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  user: store.user
})

const mapDispatchToProps = dispatch => ({
  getUser: () => {
    dispatch(actions.getUser());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);




