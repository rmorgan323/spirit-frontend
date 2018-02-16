import React, { Component } from 'react';
import './ConcernRow.css';



class ConcernRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }
  } 

  selectEnter = () => {
    this.setState({hover: true})

    let activeDomains = Object.keys(this.props).reduce((accum, prop) => {
      if (prop.length === 2 && this.props[prop]) {
        const y = [...prop].pop();
        accum.push(y)
      }
      return accum;
    },[])

    const samDots = [].slice.call(document.querySelectorAll('.sam-dots'))
    samDots.forEach((dot, index) => {
      if (activeDomains.includes((index + 1).toString())) {
        document.querySelector(`.sam-dot-${index + 1}`).classList.add('sam-hover')
      }
    })
    
  }

  selectLeave = () => {
    this.setState({hover: false})

    const samDots = [].slice.call(document.querySelectorAll('.sam-dots'))
    samDots.forEach(dot => {
      dot.classList.remove('sam-hover')
    })
  }

  render() {
    return (
      <div className="ConcernRow">
        <p className="concern-left">{this.props.concern}</p>
        <p>
          <span className={ this.props.d1 === false ? "domains" : (this.state.hover === false ? "domains domains-true" : "domains domains-true domains-hover") }>1</span>
          <span className={ this.props.d2 === false ? "domains" : (this.state.hover === false ? "domains domains-true" : "domains domains-true domains-hover") }>2</span>
          <span className={ this.props.d3 === false ? "domains" : (this.state.hover === false ? "domains domains-true" : "domains domains-true domains-hover") }>3</span>
          <span className={ this.props.d4 === false ? "domains" : (this.state.hover === false ? "domains domains-true" : "domains domains-true domains-hover") }>4</span>
          <span className={ this.props.d5 === false ? "domains" : (this.state.hover === false ? "domains domains-true" : "domains domains-true domains-hover") }>5</span>
          <span className={ this.props.d6 === false ? "domains" : (this.state.hover === false ? "domains domains-true" : "domains domains-true domains-hover") }>6</span>
        </p>
        <p className="concern-notes">{this.props.notes}</p>
        <button onMouseEnter={() => this.selectEnter()} onMouseOut={() => this.selectLeave()} className="select-concern-button">SELECT</button>
      </div>
    )
  }
}

export default ConcernRow;