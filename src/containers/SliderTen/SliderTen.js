import React, { Component } from 'react';
import Range from 'react-range-progress';
import './SliderTen.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SliderTen extends Component {
  constructor(props) {
    super(props);


    this.state = {
      value: 0,
      previousValue: 0
    };
  }

  onRangeChanged = (value) => {
    this.setState({value})
  }

  handleSliderUpdate = (previousValue) => {
    if (this.state.value !== previousValue) {
      this.props.updateSlider({[this.props.databaseName]: this.state.value})
    }
  
    this.setState({previousValue: this.state.value})
  }

  render() {
    return (
      <div 
        className="SliderTen"
        onMouseLeave={() => this.handleSliderUpdate(this.state.previousValue)}
      >
        <h5>{this.props.sliderTitle}</h5>
        <Range
          value={this.state.value}
          fillColor={{
            r: 180,
            g: 180,
            b: 180,
            a: 1,
          }}
          trackColor={{
            r: 220,
            g: 220,
            b: 220,
            a: 1,
          }}
          height={6}
          width="100%"
          thumbSize='14'
          thumbColor={{r: 200, g: 200, b: 200, a: 1}}
          onChange={this.onRangeChanged}
          min={0}
          max={10}
        />
        <p style={this.state.value === 0 ? {'opacity': 0} : null} >{this.state.value}</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateSlider: (slider) => {
    dispatch(actions.updateSlider(slider));
  }
})

export default connect(null, mapDispatchToProps)(SliderTen);



