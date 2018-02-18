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
    return (
      <div 
        className="BodyDiagram"
        onMouseLeave={() => this.handleDataUpdate(this.state.part1, this.state.part2, this.state.part3, this.state.part4, this.state.part5, this.state.part6, this.state.part7, this.state.part8)}
      >
        <h4 className="category-title">Body Parts</h4>
        <div className="body-key">
          <h6 
            className={this.state.part1 || this.state.hover1 ? "hover-purple-color" : null}
            onClick={() => this.togglePart(1)} 
            onMouseOver={() => this.hoverMe(1)} 
            onMouseOut={() => this.unHoverMe(1)} 
          >1. Core Abdominal Control</h6>
          <h6
            className={this.state.part2 || this.state.hover2 ? "hover-purple-color" : null}
            onClick={() => this.togglePart(2)}
            onMouseOver={() => this.hoverMe(2)} 
            onMouseOut={() => this.unHoverMe(2)} 
          >2. Shoulder Girdle Core</h6>
          <h6
            className={this.state.part3 || this.state.hover3 ? "hover-purple-color" : null}
            onClick={() => this.togglePart(3)} 
            onMouseOver={() => this.hoverMe(3)} 
            onMouseOut={() => this.unHoverMe(3)} 
          >3. Pelvic Trunk/LE Core</h6>
          <h6
            className={this.state.part4 || this.state.hover4 ? "hover-purple-color" : null}
            onClick={() => this.togglePart(4)}
            onMouseOver={() => this.hoverMe(4)} 
            onMouseOut={() => this.unHoverMe(4)} 
          >4. Head/Neck to Trunk Core</h6>
          <h6
            className={this.state.part5 || this.state.hover5 ? "hover-purple-color" : null}
            onClick={() => this.togglePart(5)}
            onMouseOver={() => this.hoverMe(5)} 
            onMouseOut={() => this.unHoverMe(5)}  
          >5. Eyes in Head Core</h6>
          <h6
            className={this.state.part6 || this.state.hover6 ? "hover-purple-color" : null}
            onClick={() => this.togglePart(6)}
            onMouseOver={() => this.hoverMe(6)} 
            onMouseOut={() => this.unHoverMe(6)} 
          >6. Hand Control</h6>
          <h6
            className={this.state.part7 || this.state.hover7 ? "hover-purple-color" : null}
            onClick={() => this.togglePart(7)}
            onMouseOver={() => this.hoverMe(7)} 
            onMouseOut={() => this.unHoverMe(7)} 
          >7. Lower Extremity</h6>
          <h6
            className={this.state.part8 || this.state.hover8 ? "hover-purple-color" : null}
            onClick={() => this.togglePart(8)} 
            onMouseOver={() => this.hoverMe(8)} 
            onMouseOut={() => this.unHoverMe(8)} 
          >8. Foot/Base of Support Core</h6>

          <div 
            onClick={() => this.togglePart(1)} 
            onMouseOver={() => this.hoverMe(1)} 
            onMouseOut={() => this.unHoverMe(1)} 
            className={this.state.part1 || this.state.hover1 ? "parts part1 hover-purple-bg" : "parts part1"}
          >
            <p>1</p>
          </div>
          <div 
            onClick={() => this.togglePart(2)} 
            onMouseOver={() => this.hoverMe(2)} 
            onMouseOut={() => this.unHoverMe(2)} 
            className={this.state.part2 || this.state.hover2 ? "parts part2 hover-purple-bg" : "parts part2"}
          >
            <p>2</p>
          </div>
          <div 
            onClick={() => this.togglePart(3)} 
            onMouseOver={() => this.hoverMe(3)} 
            onMouseOut={() => this.unHoverMe(3)} 
            className={this.state.part3 || this.state.hover3 ? "parts part3 hover-purple-bg" : "parts part3"}
          >
            <p>3</p>
          </div>
          <div 
            onClick={() => this.togglePart(4)} 
            onMouseOver={() => this.hoverMe(4)} 
            onMouseOut={() => this.unHoverMe(4)} 
            className={this.state.part4 || this.state.hover4 ? "parts part4 hover-purple-bg" : "parts part4"}
          >
            <p>4</p>
          </div>
          <div 
            onClick={() => this.togglePart(5)} 
            onMouseOver={() => this.hoverMe(5)} 
            onMouseOut={() => this.unHoverMe(5)} 
            className={this.state.part5 || this.state.hover5 ? "parts part5 hover-purple-bg" : "parts part5"}
          >
            <p>5</p>
          </div>
          <div 
            onClick={() => this.togglePart(6)} 
            onMouseOver={() => this.hoverMe(6)} 
            onMouseOut={() => this.unHoverMe(6)} 
            className={this.state.part6 || this.state.hover6 ? "parts part6 hover-purple-bg" : "parts part6"}
          >
            <p>6</p>
          </div>
          <div 
            onClick={() => this.togglePart(7)} 
            onMouseOver={() => this.hoverMe(7)} 
            onMouseOut={() => this.unHoverMe(7)} 
            className={this.state.part7 || this.state.hover7 ? "parts part7 hover-purple-bg" : "parts part7"}
          >
            <p>7</p>
          </div>
          <div 
            onClick={() => this.togglePart(8)} 
            onMouseOver={() => this.hoverMe(8)} 
            onMouseOut={() => this.unHoverMe(8)} 
            className={this.state.part8 || this.state.hover8 ? "parts part8 hover-purple-bg" : "parts part8"}
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

export default connect(null, mapDispatchToProps)(BodyDiagram);