import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
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
        <Link to={`/spirit/concerns/${id}/sessions`}><button onClick={(id) => this.props.setConcern(id)} onMouseEnter={() => this.selectEnter()} onMouseOut={() => this.selectLeave()} className="select-concern-button">SELECT</button></Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, concernId) => ({
  setConcern: (concernId) => dispatch(actions.setConcern(concernId))
})

export default connect(null, mapDispatchToProps)(ConcernRow);