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
    if (matchedComponentValue) {
      const valueArray = matchedComponentValue.split('');
      const value = valueArray[0];
      const fair = valueArray[1];

      this.setState({ value, fair });
    }
  };

  onRangeChanged = value => {
    this.setState({ value });
  };

  handleSliderUpdate = (previousValue, previousFair) => {
    const { value, fair } = this.state;
    const {
      updateProcessPerformanceComponent,
      selectedProcess,
      databaseName
    } = this.props;

    if (value !== previousValue || fair !== previousFair) {
      updateProcessPerformanceComponent(selectedProcess.id, {
        [databaseName]: value.toString() + fair
      });
    }

    this.setState({ previousValue: value, previousFair: fair });
  };

  chooseFair = letter => {
    this.setState({ fair: letter });
  };

  toggleDefinition = () => {
    const { displayDefinition } = this.state;

    this.setState({ displayDefinition: !displayDefinition });
  };

  render() {
    const {
      value,
      previousValue,
      fair,
      previousFair,
      displayDefinition
    } = this.state;

    const { sliderTitle, reminderAsterisk } = this.props;

    return (
      <div
        className="SliderTen"
        onMouseLeave={() =>
          this.handleSliderUpdate(previousValue, previousFair)
        }
      >
        <div className="slider-heading">
          <img
            className="definition-image"
            src="/assets/mag-glass.svg"
            onClick={() => this.toggleDefinition()}
            alt="definition"
          />
          <div
            className={
              displayDefinition === true
                ? 'definition-holder display-definition'
                : 'definition-holder'
            }
          >
            <Definition title={sliderTitle} />
          </div>
          <h5>{sliderTitle}</h5>
          <h5>{reminderAsterisk}</h5>
        </div>
        <p style={value === 0 ? { opacity: 0 } : null}>{value}</p>
        <Range
          value={value}
          fillColor={{
            r: 180,
            g: 180,
            b: 180,
            a: 1
          }}
          trackColor={{
            r: 220,
            g: 220,
            b: 220,
            a: 1
          }}
          height={6}
          width="100%"
          thumbSize={14}
          thumbColor={{ r: 200, g: 200, b: 200, a: 1 }}
          onChange={this.onRangeChanged}
          min={0}
          max={10}
        />
        <h2>
          <span
            onClick={() => this.chooseFair('f')}
            className={
              fair === 'f' ? 'button-fair button-active' : 'button-fair'
            }
          >
            F
          </span>
          <span
            onClick={() => this.chooseFair('a')}
            className={
              fair === 'a' ? 'button-fair button-active' : 'button-fair'
            }
          >
            A
          </span>
          <span
            onClick={() => this.chooseFair('i')}
            className={
              fair === 'i' ? 'button-fair button-active' : 'button-fair'
            }
          >
            I
          </span>
          <span
            onClick={() => this.chooseFair('r')}
            className={
              fair === 'r' ? 'button-fair button-active' : 'button-fair'
            }
          >
            R
          </span>
        </h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(SliderTen);
