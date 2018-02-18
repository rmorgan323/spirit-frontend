import React, { Component } from 'react';
import './YesNo.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class YesNo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yesNo: null
    }
  }

  componentDidMount() {
    const { selectedProcess, databaseName } = this.props;
    const matchedComponentValue = selectedProcess[Object.keys(selectedProcess).find(component => component === databaseName)];

    this.loadComponentValue(matchedComponentValue);
  }

  loadComponentValue = matchedComponentValue => {
    if (matchedComponentValue !== null) {
      const yesNo = matchedComponentValue
      this.setState({yesNo})
    }
  }

  handleChange = (boolean) => {
    this.props.updateProcessPerformanceComponent(this.props.selectedProcess.id, {[this.props.databaseName]: boolean});
    this.setState({yesNo: boolean})
  }

  render() {
    return (
      <div className="YesNo">
        <h5>{this.props.question}</h5>
        <button
          className={this.state.yesNo === true ? "yes-no yes-no-active" : "yes-no"} 
          onClick={() => this.handleChange(true)} 
        ><span className="yes-span">YES</span></button>
        <button 
          className={this.state.yesNo === false ? "yes-no yes-no-active" : "yes-no"} 
          onClick={() => this.handleChange(false)} 
        ><span className="no-span">NO</span></button>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  selectedProcess: store.selectedProcess
})

const mapDispatchToProps = dispatch => ({
  updateProcessPerformanceComponent: (processId, updatedProcess) => {
    dispatch(actions.updateProcessPerformanceComponent(processId, updatedProcess));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(YesNo);
