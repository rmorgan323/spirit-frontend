import React, { Component } from 'react';
import Range from 'react-range-progress';
import './SliderTen.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Definition from '../../components/Definition/Definition';

class SliderTen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      previousValue: 0,
      fair: '',
      previousFair: '',
      displayDefinition: false
    };
  }

  onRangeChanged = (value) => {
    this.setState({value})
  }

  handleSliderUpdate = (previousValue, previousFair) => {
    if (this.state.value !== previousValue || this.state.fair !== previousFair) {
      this.props.updateSlider({[this.props.databaseName]: this.state.value.toString() + this.state.fair})
    }
  
    this.setState({previousValue: this.state.value, previousFair: this.state.fair})
  }

  chooseFair = (letter) => {
    this.setState({fair: letter})
  }

  toggleDefinition = () => {
    this.setState({displayDefinition: !this.state.displayDefinition})
  }

  render() {
    return (
      <div 
        className="SliderTen"
        onMouseLeave={() => this.handleSliderUpdate(this.state.previousValue, this.state.previousFair)}
      >
        <div className="slider-heading">
          <img 
            className="definition-image" 
            src="/assets/mag-glass.svg"
            onClick={() => this.toggleDefinition()}
          />
          <div className={this.state.displayDefinition === true ? "definition-holder display-definition" : "definition-holder"}>
            <Definition 
              title={this.props.sliderTitle}
            />
          </div>
          <h5>{this.props.sliderTitle}</h5>
          <h5>{this.props.reminderAsterisk}</h5>
        </div>
        <p style={this.state.value === 0 ? {'opacity': 0} : null} >{this.state.value}</p>
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
          thumbSize={14}
          thumbColor={{r: 200, g: 200, b: 200, a: 1}}
          onChange={this.onRangeChanged}
          min={0}
          max={10}
        />
        <h2>
          <span onClick={() => this.chooseFair('f')} className={this.state.fair === 'f' ? "button-fair button-active" : "button-fair"}>F</span>
          <span onClick={() => this.chooseFair('a')} className={this.state.fair === 'a' ? "button-fair button-active" : "button-fair"}>A</span>
          <span onClick={() => this.chooseFair('i')} className={this.state.fair === 'i' ? "button-fair button-active" : "button-fair"}>I</span>
          <span onClick={() => this.chooseFair('r')} className={this.state.fair === 'r' ? "button-fair button-active" : "button-fair"}>R</span>
        </h2>
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



