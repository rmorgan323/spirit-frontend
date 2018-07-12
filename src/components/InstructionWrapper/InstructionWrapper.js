import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import './InstructionWrapper.css';

class InstructionWrapper extends Component {
  state = {
    showInstructions: true
  };

  toggleInstructions = () =>
    this.setState(prevState => ({
      showInstructions: !prevState.showInstructions
    }));

  render() {
    const { children } = this.props
    const { showInstructions } = this.state;

    return (
      <div className="InstructionWrapper">
        <div
          className={`instructions-wrapper ${
            !showInstructions ? `show-instructions` : `hide-instructions`
          }`}
        >
          {children}
        </div>

        <span
          className="patient-directions-toggle"
          onClick={this.toggleInstructions}
        >{`${showInstructions ? `Show` : `Hide`} Instructions`}</span>
      </div>
    );
  }
}

export default InstructionWrapper;
