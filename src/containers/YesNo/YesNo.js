import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as actions from '../../actions';
import './YesNo.css';

class YesNo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yesNo: null
    };
  }

  componentDidMount() {
    const { selectedProcess, databaseName } = this.props;
    const matchedComponentValue =
      selectedProcess[
        Object.keys(selectedProcess).find(
          component => component === databaseName
        )
      ];

    this.loadComponentValue(matchedComponentValue);
  }

  loadComponentValue = matchedComponentValue => {
    if (matchedComponentValue !== null) {
      const yesNo = matchedComponentValue;
      this.setState({ yesNo });
    }
  };

  handleChange = boolean => {
    const {
      updateProcessPerformanceComponent,
      selectedProcess,
      databaseName
    } = this.props;

    updateProcessPerformanceComponent(selectedProcess.id, {
      [databaseName]: boolean
    });
    this.setState({ yesNo: boolean });
  };

  render() {
    const { question } = this.props;
    const { yesNo } = this.state;

    return (
      <div className="YesNo">
        <h5>{question}</h5>
        <button
          className={yesNo === true ? 'yes-no yes-no-active' : 'yes-no'}
          onClick={() => this.handleChange(true)}
        >
          <span className="yes-span">YES</span>
        </button>
        <button
          className={yesNo === false ? 'yes-no yes-no-active' : 'yes-no'}
          onClick={() => this.handleChange(false)}
        >
          <span className="no-span">NO</span>
        </button>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  selectedProcess: store.selectedProcess
});

const mapDispatchToProps = dispatch => ({
  updateProcessPerformanceComponent: (processId, updatedProcess) => {
    dispatch(
      actions.updateProcessPerformanceComponent(processId, updatedProcess)
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(YesNo);

YesNo.propTypes = {
  selectedProcess: PropTypes.object,
  databaseName: PropTypes.string,
  updateProcessPerformanceComponent: PropTypes.func,
  question: PropTypes.string
};
