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
    };
  }

  selectEnter = () => {
    this.setState({ hover: true });

    let activeDomains = Object.keys(this.props).reduce((accum, prop) => {
      if (prop.length === 2 && this.props[prop]) {
        const y = [...prop].pop();
        accum.push(y);
      }
      return accum;
    }, []);

    const samDots = [].slice.call(document.querySelectorAll('.sam-dots'));
    samDots.forEach((dot, index) => {
      if (activeDomains.includes((index + 1).toString())) {
        document
          .querySelector(`.sam-dot-${index + 1}`)
          .classList.add('sam-hover');
      }
    });
  };

  selectLeave = () => {
    this.setState({ hover: false });

    const samDots = [].slice.call(document.querySelectorAll('.sam-dots'));
    samDots.forEach(dot => {
      dot.classList.remove('sam-hover');
    });
  };

  determineDomainClass = (domain, hover) => {
    if (!domain) {
      return 'domains';
    } else if (!hover) {
      return 'domains domains-true';
    } else {
      return 'domains domains-true domains-hover';
    }
  };

  render() {
    const { id, concern, d1, d2, d3, d4, d5, d6, notes } = this.props;
    const { hover } = this.state;

    return (
      <div className="ConcernRow">
        <p className="concern-left">{concern}</p>

        <p>
          <span className={this.determineDomainClass(d1, hover)}>1</span>
          <span className={this.determineDomainClass(d2, hover)}>2</span>
          <span className={this.determineDomainClass(d3, hover)}>3</span>
          <span className={this.determineDomainClass(d4, hover)}>4</span>
          <span className={this.determineDomainClass(d5, hover)}>5</span>
          <span className={this.determineDomainClass(d6, hover)}>6</span>
        </p>

        <p className="concern-notes">{notes}</p>

        <Link to={`/spirit/concerns/${id}/sessions`}>
          <button
            className="select-concern-button"
            onClick={id => this.props.getConcern(id)}
            onMouseEnter={() => this.selectEnter()}
            onMouseOut={() => this.selectLeave()}
          >
            SELECT
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, concernId) => ({
  // getConcern: (concernId) => dispatch(actions.getConcern(concernId))
});

export default connect(null, mapDispatchToProps)(ConcernRow);
