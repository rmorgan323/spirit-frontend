import React, { Component } from 'react';
import clearLocalStorage from '../../helpers/clearLocalStorage';
import { connect } from 'react-redux';
import * as actions from '../../actions';

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
      <div>
        Header
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getUser: () => {
    dispatch(actions.getUser());
  }
})

export default connect(null, mapDispatchToProps)(Header);




