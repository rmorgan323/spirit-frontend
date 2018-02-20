import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as actions from '../../actions';
import './TreatmentPlanModule.css';

class TreatmentPlanModule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sensory: '',
      task: '',
      environment: '',
      predictability: '',
      self_regulation: '',
      interaction: '',
      JRC_AR_notes: '',
      changed: false
    }
  }

  componentDidMount = () => {
    const { selectedTreatmentPlan, type } = this.props;

    this.setState({
      sensory: selectedTreatmentPlan[`${type}sensory`],
      task: selectedTreatmentPlan[`${type}task`],
      environment: selectedTreatmentPlan[`${type}environment`],
      predictability: selectedTreatmentPlan[`${type}predictability`],
      self_regulation: selectedTreatmentPlan[`${type}self_regulation`],
      interaction: selectedTreatmentPlan[`${type}interaction`],
      JRC_AR_notes: selectedTreatmentPlan[`${type}JRC_AR_notes`]
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value, changed: true})
  }

  handleSave = (type) => {
    const { getTreatmentPlan, selectedTreatmentPlan } = this.props;
    const { changed, sensory, task, environment, predictability, self_regulation, interaction, JRC_AR_notes } = this.state;

    if (changed === true) {
      getTreatmentPlan(selectedTreatmentPlan.id, {
        [`${type}sensory`]: sensory, 
        [`${type}task`]: task,
        [`${type}environment`]: environment, 
        [`${type}predictability`]: predictability, 
        [`${type}self_regulation`]: self_regulation, 
        [`${type}interaction`]: interaction, 
        [`${type}JRC_AR_notes`]: JRC_AR_notes
      })
      this.setState({changed: false})
    }
  }

  render() {
    const { type } = this.props;
    const { changed, sensory, task, environment, predictability, self_regulation, interaction, JRC_AR_notes } = this.state;

    return (
      <div className="TreatmentPlanModule treatment-save-box" onMouseLeave={() => this.handleSave(type)}>
        <div className="treatment-rows">
          <h4>Sensory Motor</h4>
          <textarea 
            placeholder="notes"
            name="sensory"
            onChange={(event) => this.handleChange(event)}
            value={sensory}
          ></textarea>
        </div>
        <div className="treatment-rows">
          <h4>Task</h4>
          <textarea 
            placeholder="notes"
            name="task"
            onChange={(event) => this.handleChange(event)}
            value={task}
          ></textarea>
        </div>
        <div className="treatment-rows">
          <h4>Environment</h4>
          <textarea 
            placeholder="notes"
            name="environment"
            onChange={(event) => this.handleChange(event)}
            value={environment}
          ></textarea>
        </div>
        <div className="treatment-rows">
          <h4>Predictability</h4>
          <textarea 
            placeholder="notes"
            name="predictability"
            onChange={(event) => this.handleChange(event)}
            value={predictability}
          ></textarea>
        </div>
        <div className="treatment-rows">
          <h4>Self-Regulation</h4>
          <textarea 
            placeholder="notes"
            name="self_regulation"
            onChange={(event) => this.handleChange(event)}
            value={self_regulation}
          ></textarea>
        </div>
        <div className="treatment-rows">
          <h4>Interaction</h4>
          <textarea
            placeholder="notes"
            name="interaction"
            onChange={(event) => this.handleChange(event)}
            value={interaction}
          ></textarea>
        </div>
        <div className="treatment-rows">
          <h4>JRC/AR</h4>
          <textarea 
            placeholder="notes"
            name="JRC_AR_notes"
            onChange={(event) => this.handleChange(event)}
            value={JRC_AR_notes}
          ></textarea>
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  selectedTreatmentPlan: store.selectedTreatmentPlan
})

const mapDispatchToProps = dispatch => ({
  getTreatmentPlan: (id, treatmentPlanObject) => {
    dispatch(actions.getTreatmentPlan(id, treatmentPlanObject))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TreatmentPlanModule);

TreatmentPlanModule.propTypes = {
  selectedTreatmentPlan: PropTypes.object,
  type: PropTypes.string,
  getTreatmentPlan: PropTypes.func
};
