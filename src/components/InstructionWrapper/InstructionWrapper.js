import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import './InstructionWrapper.css';

class InstructionWrapper extends Component {
  state = {
    hideInstructions: true
  };

  toggleInstructions = () =>
    this.setState(prevState => ({
      hideInstructions: !prevState.hideInstructions
    }));

  render() {
    const { children } = this.props;
    const { hideInstructions } = this.state;

    return (
      <div className="InstructionWrapper">
        <span
          className="patient-directions-toggle"
          onClick={this.toggleInstructions}
        >{`${hideInstructions ? `Show` : `Hide`} Instructions`}</span>

        <div
          className={`instructions-wrapper ${
            !hideInstructions ? `show-instructions` : `hide-instructions`
          }`}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default InstructionWrapper;
