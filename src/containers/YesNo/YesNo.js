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

  handleChange = (boolean) => {
    this.props.updateSlider({[this.props.databaseName]: boolean})
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

const mapDispatchToProps = dispatch => ({
  updateSlider: (slider) => {
    dispatch(actions.updateSlider(slider));
  }
})

export default connect(null, mapDispatchToProps)(YesNo);
