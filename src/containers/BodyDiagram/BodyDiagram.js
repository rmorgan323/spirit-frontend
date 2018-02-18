import React, { Component } from 'react';
import './BodyDiagram.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class BodyDiagram extends Component {
  constructor() {
    super();

    this.state = {
      part1: false,
      part2: false,
      part3: false,
      part4: false,
      part5: false,
      part6: false,
      part7: false,
      part8: false,
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      hover5: false,
      hover6: false,
      hover7: false,
      hover8: false,
      changed: false
    }
  }

  componentDidMount() {
    const { selectedProcess } = this.props;
    const bodyPropertiesArray = [ 'pos_4_core', 'pos_4_shoulder', 'pos_4_pelvic', 'pos_4_head', 'pos_4_eyes', 'pos_4_hand', 'pos_4_lower', 'pos_4_foot' ];
    const matchedComponentValues = bodyPropertiesArray.map(componentName => {
      const matchedComponent = Object.keys(selectedProcess).find(component => component === componentName);
      const valueFromStore = selectedProcess[matchedComponent];

      return valueFromStore === 'true' ? true : false;
    });

    this.loadComponentValue(matchedComponentValues);
  }

  loadComponentValue = matchedComponentValues => {
    const bodyPartsState = [ 'part1', 'part2', 'part3', 'part4', 'part5', 'part6', 'part7', 'part8' ];

    bodyPartsState.forEach((bodyPart, index) => {
      this.setState({[bodyPart]: matchedComponentValues[index]})
    })
  }

  hoverMe = (num) => {
    this.setState({[`hover${num}`]: true})
  }

  unHoverMe = (num) => {
    this.setState({[`hover${num}`]: false})
  }

  togglePart = (num) => {
    this.setState({[`part${num}`]: !this.state[`part${num}`]})
    this.setState({changed: true})
  }

  handleDataUpdate = (p1, p2, p3, p4, p5, p6, p7, p8) => {
    if (this.state.changed === true) {
      this.props.updateProcessPerformanceComponent(this.props.selectedProcess.id, {pos_4_core: p1, pos_4_shoulder: p2, pos_4_pelvic: p3, pos_4_head: p4, pos_4_eyes: p5, pos_4_hand: p6, pos_4_lower: p7, pos_4_foot: p8});
      this.setState({changed: false})
    }
  }

  render() {
    const { part1, part2, part3, part4, part5, part6, part7, part8 } = this.state;
    const { hover1, hover2, hover3, hover4, hover5, hover6, hover7, hover8 } = this.state;
    return (
      <div
        className="BodyDiagram"
        onMouseLeave={() => this.handleDataUpdate(part1, part2, part3, part4, part5, part6, part7, part8)}
      >
        <h4 className="category-title">Body Parts</h4>
        <div className="body-key">
          <h6
            className={part1 || hover1 ? "hover-purple-color" : null}
            onClick={() => this.togglePart(1)} 
            onMouseOver={() => this.hoverMe(1)} 
            onMouseOut={() => this.unHoverMe(1)} 
          >1. Core Abdominal Control</h6>
          <h6
            className={part2 || hover2 ? "hover-purple-color" : null}
            onClick={() => this.togglePart(2)}
            onMouseOver={() => this.hoverMe(2)} 
            onMouseOut={() => this.unHoverMe(2)} 
          >2. Shoulder Girdle Core</h6>
          <h6
            className={part3 || hover3 ? "hover-purple-color" : null}
            onClick={() => this.togglePart(3)} 
            onMouseOver={() => this.hoverMe(3)} 
            onMouseOut={() => this.unHoverMe(3)} 
          >3. Pelvic Trunk/LE Core</h6>
          <h6
            className={part4 || hover4 ? "hover-purple-color" : null}
            onClick={() => this.togglePart(4)}
            onMouseOver={() => this.hoverMe(4)} 
            onMouseOut={() => this.unHoverMe(4)} 
          >4. Head/Neck to Trunk Core</h6>
          <h6
            className={part5 || hover5 ? "hover-purple-color" : null}
            onClick={() => this.togglePart(5)}
            onMouseOver={() => this.hoverMe(5)} 
            onMouseOut={() => this.unHoverMe(5)}  
          >5. Eyes in Head Core</h6>
          <h6
            className={part6 || hover6 ? "hover-purple-color" : null}
            onClick={() => this.togglePart(6)}
            onMouseOver={() => this.hoverMe(6)} 
            onMouseOut={() => this.unHoverMe(6)} 
          >6. Hand Control</h6>
          <h6
            className={part7 || hover7 ? "hover-purple-color" : null}
            onClick={() => this.togglePart(7)}
            onMouseOver={() => this.hoverMe(7)} 
            onMouseOut={() => this.unHoverMe(7)} 
          >7. Lower Extremity</h6>
          <h6
            className={part8 || hover8 ? "hover-purple-color" : null}
            onClick={() => this.togglePart(8)} 
            onMouseOver={() => this.hoverMe(8)} 
            onMouseOut={() => this.unHoverMe(8)} 
          >8. Foot/Base of Support Core</h6>

          <div 
            onClick={() => this.togglePart(1)} 
            onMouseOver={() => this.hoverMe(1)} 
            onMouseOut={() => this.unHoverMe(1)} 
            className={part1 || hover1 ? "parts part1 hover-purple-bg" : "parts part1"}
          >
            <p>1</p>
          </div>
          <div 
            onClick={() => this.togglePart(2)} 
            onMouseOver={() => this.hoverMe(2)} 
            onMouseOut={() => this.unHoverMe(2)} 
            className={part2 || hover2 ? "parts part2 hover-purple-bg" : "parts part2"}
          >
            <p>2</p>
          </div>
          <div 
            onClick={() => this.togglePart(3)} 
            onMouseOver={() => this.hoverMe(3)} 
            onMouseOut={() => this.unHoverMe(3)} 
            className={part3 || hover3 ? "parts part3 hover-purple-bg" : "parts part3"}
          >
            <p>3</p>
          </div>
          <div 
            onClick={() => this.togglePart(4)} 
            onMouseOver={() => this.hoverMe(4)} 
            onMouseOut={() => this.unHoverMe(4)} 
            className={part4 || hover4 ? "parts part4 hover-purple-bg" : "parts part4"}
          >
            <p>4</p>
          </div>
          <div 
            onClick={() => this.togglePart(5)} 
            onMouseOver={() => this.hoverMe(5)} 
            onMouseOut={() => this.unHoverMe(5)} 
            className={part5 || hover5 ? "parts part5 hover-purple-bg" : "parts part5"}
          >
            <p>5</p>
          </div>
          <div 
            onClick={() => this.togglePart(6)} 
            onMouseOver={() => this.hoverMe(6)} 
            onMouseOut={() => this.unHoverMe(6)} 
            className={part6 || hover6 ? "parts part6 hover-purple-bg" : "parts part6"}
          >
            <p>6</p>
          </div>
          <div 
            onClick={() => this.togglePart(7)} 
            onMouseOver={() => this.hoverMe(7)} 
            onMouseOut={() => this.unHoverMe(7)} 
            className={part7 || hover7 ? "parts part7 hover-purple-bg" : "parts part7"}
          >
            <p>7</p>
          </div>
          <div 
            onClick={() => this.togglePart(8)} 
            onMouseOver={() => this.hoverMe(8)} 
            onMouseOut={() => this.unHoverMe(8)} 
            className={part8 || hover8 ? "parts part8 hover-purple-bg" : "parts part8"}
          >
            <p>8</p>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BodyDiagram);