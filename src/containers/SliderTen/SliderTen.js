import React, { Component } from 'react';
import Range from 'react-range-progress';
import './SliderTen.css';

class SliderTen extends Component {
  constructor(props) {
    super(props);


    this.state = {
      value: 0
    };
  }


  onRangeChanged = (value) => {
    this.setState({value})
  }

  render() {
    return (
      <div className="SliderTen">
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
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default SliderTen;