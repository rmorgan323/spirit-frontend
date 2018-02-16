import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const { id, concern, d1, d2, d3, d4, d5, d6, notes } = this.props;
    const { hover } = this.state;

    return (
      <div className="ConcernRow">
        <p className="concern-left">{concern}</p>
        <p>
          <span className={ d1 === false ? "domains" : (hover === false ? "domains domains-true" : "domains domains-true domains-hover") }>1</span>
          <span className={ d2 === false ? "domains" : (hover === false ? "domains domains-true" : "domains domains-true domains-hover") }>2</span>
          <span className={ d3 === false ? "domains" : (hover === false ? "domains domains-true" : "domains domains-true domains-hover") }>3</span>
          <span className={ d4 === false ? "domains" : (hover === false ? "domains domains-true" : "domains domains-true domains-hover") }>4</span>
          <span className={ d5 === false ? "domains" : (hover === false ? "domains domains-true" : "domains domains-true domains-hover") }>5</span>
          <span className={ d6 === false ? "domains" : (hover === false ? "domains domains-true" : "domains domains-true domains-hover") }>6</span>
        </p>
        <p className="concern-notes">{notes}</p>
        <button onClick={console.log(id)} onMouseEnter={() => this.selectEnter()} onMouseOut={() => this.selectLeave()} className="select-concern-button">SELECT</button>
      </div>
    )
  }
}

export default ConcernRow;