import React, { Component } from 'react';
import './TherapyGoals.css';
import { connect } from 'react-redux';
import Range from 'react-range-progress';
import * as actions from '../../actions';

class TherapyGoals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goals: '',
      ot_importance: 0,
      parent_importance: 0,
      ot_performance: 0,
      parent_performance: 0,
      ot_satisfaction: 0,
      parent_satisfaction: 0,
      changed: false
    }
  }

  handleRangeChange = (value, type) => {
    this.setState({ [type]: value, changed: true });
  };

  handleGoalsChange = (event) => {
    this.setState({goals: event.target.value, changed: true})
  }

  handleTherapyGoalsUpdate = (goals, oti, pi, otp, pp, ots, ps) => {
    const type = this.props.category

    if (this.state.changed === true) {
      this.props.updateTherapyGoal(this.props.selectedTherapyGoal.id, {
        [`${type}goals`]: goals,
        [`${type}ot_importance`]: oti,
        [`${type}parent_importance`]: pi,
        [`${type}ot_performance`]: otp,
        [`${type}parent_performance`]: pp,
        [`${type}ot_satisfaction`]: ots,
        [`${type}parent_satisfaction`]: ps
      })

      this.setState({changed: false})
    }
  }

  render() {
    const { goals, ot_importance, parent_importance, ot_performance, parent_performance, ot_satisfaction, parent_satisfaction } = this.state;
    const impArray = ['-', '1 - not at all important', '2 - not important', '3 - not very important', '4 - somewhat important', '5 - somewhat important', '6 - important', '7 - important', '8 - very important', '9 - very important', '10 - extremely important']
    const perArray = ['-', '1 - unable to perform', '2 - limited performance', '3 - limited performance', '4 - somewhat able to perform', '5 - somewhat able to perform', '6 - able to perform', '7 - able to perform', '8 - performs well', '9 - performs very well', '10 - performs extremely well']
    const satArray = ['-', '1 - not at all satisfied', '2 - not satisfied', '3 - not very satisfied', '4 - somewhat satisfied', '5 - somewhat satisfied', '6 - satisfied', '7 - satisfied', '8 - very satisfied', '9 - very satisfied', '10 - extremely satisfied']

    return (
      <div onMouseLeave={() => this.handleTherapyGoalsUpdate(goals, ot_importance, parent_importance, ot_performance, parent_performance, ot_satisfaction, parent_satisfaction)} className="TherapyGoals">

          <div className="therapy-domain">
            <div className="therapy-domain-header">
              <p>{this.props.number}</p>
              <h4>{this.props.title}</h4>
            </div>
            <textarea onChange={(event) => this.handleGoalsChange(event)} value={this.state.goals} className="modulation-goal" placeholder="goals"></textarea>
          </div>

          <div className="therapy-importance">
            <h4 className="category-title">Importance</h4>
            <h5>OT</h5>
            <p style={ot_importance === 0 ? { opacity: 0 } : null}>{impArray[ot_importance]}</p>
            <Range
              value={ot_importance}
              fillColor={{ r: 167, g: 169, b: 172, a: 1 }}
              trackColor={{ r: 241, g: 242, b: 242, a: 1 }}
              height={6}
              width="100%"
              thumbSize={14}
              thumbColor={{ r: 167, g: 169, b: 172, a: 1 }}
              onChange={(value) => this.handleRangeChange(value, 'ot_importance')}
              min={0}
              max={10}
            />
            <h5>Parent</h5>
            <p style={parent_importance === 0 ? { opacity: 0 } : null}>{impArray[parent_importance]}</p>
            <Range
              value={parent_importance}
              fillColor={{ r: 167, g: 169, b: 172, a: 1 }}
              trackColor={{ r: 241, g: 242, b: 242, a: 1 }}
              height={6}
              width="100%"
              thumbSize={14}
              thumbColor={{ r: 167, g: 169, b: 172, a: 1 }}
              onChange={(value) => this.handleRangeChange(value, 'parent_importance')}
              min={0}
              max={10}
            />
          </div>

          <div className="therapy-performance">
            <h4 className="category-title">Performance</h4>
            <h5>OT</h5>
            <p style={ot_performance === 0 ? { opacity: 0 } : null}>{perArray[ot_performance]}</p>
            <Range
              value={ot_performance}
              fillColor={{ r: 167, g: 169, b: 172, a: 1 }}
              trackColor={{ r: 241, g: 242, b: 242, a: 1 }}
              height={6}
              width="100%"
              thumbSize={14}
              thumbColor={{ r: 167, g: 169, b: 172, a: 1 }}
              onChange={(value) => this.handleRangeChange(value, 'ot_performance')}
              min={0}
              max={10}
            />
            <h5>Parent</h5>
            <p style={parent_performance === 0 ? { opacity: 0 } : null}>{perArray[parent_performance]}</p>
            <Range
              value={parent_performance}
              fillColor={{ r: 167, g: 169, b: 172, a: 1 }}
              trackColor={{ r: 241, g: 242, b: 242, a: 1 }}
              height={6}
              width="100%"
              thumbSize={14}
              thumbColor={{ r: 167, g: 169, b: 172, a: 1 }}
              onChange={(value) => this.handleRangeChange(value, 'parent_performance')}
              min={0}
              max={10}
            />
          </div>

          <div className="therapy-satisfaction">
            <h4 className="category-title">Satisfaction</h4>
            <h5>OT</h5>
            <p style={ot_satisfaction === 0 ? { opacity: 0 } : null}>{satArray[ot_satisfaction]}</p>
            <Range
              value={ot_satisfaction}
              fillColor={{ r: 167, g: 169, b: 172, a: 1 }}
              trackColor={{ r: 241, g: 242, b: 242, a: 1 }}
              height={6}
              width="100%"
              thumbSize={14}
              thumbColor={{ r: 167, g: 169, b: 172, a: 1 }}
              onChange={(value) => this.handleRangeChange(value, 'ot_satisfaction')}
              min={0}
              max={10}
            />
            <h5>Parent</h5>
            <p style={parent_satisfaction === 0 ? { opacity: 0 } : null}>{satArray[parent_satisfaction]}</p>
            <Range
              value={parent_satisfaction}
              fillColor={{ r: 167, g: 169, b: 172, a: 1 }}
              trackColor={{ r: 241, g: 242, b: 242, a: 1 }}
              height={6}
              width="100%"
              thumbSize={14}
              thumbColor={{ r: 167, g: 169, b: 172, a: 1 }}
              onChange={(value) => this.handleRangeChange(value, 'parent_satisfaction')}
              min={0}
              max={10}
            />
          </div>

      </div>
    )
  }
}

const mapStateToProps = store => ({
  selectedTherapyGoal: store.selectedTherapyGoal
})

const mapDispatchToProps = dispatch => ({
  updateTherapyGoal: (id, goalObj) => {
    console.log(id, goalObj)
    // dispatch(actions.updateTherapyGoal(id, goalsObj))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TherapyGoals);