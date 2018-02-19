import React, { Component } from 'react';
import './TreatmentPlanModule.css';
import * as actions from '../../actions';
import { connect } from 'react-redux';

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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value, changed: true})
  }

  handleSave = (type) => {
    if (this.state.changed === true) {
      this.props.updateTreatmentPlans({
        [`${type}sensory`]: this.state.sensory, 
        [`${type}task`]: this.state.task,
        [`${type}environment`]: this.state.environment, 
        [`${type}predictability`]: this.state.predictability, 
        [`${type}self_regulation`]: this.state.self_regulation, 
        [`${type}interaction`]: this.state.interaction, 
        [`${type}JRC_AR_notes`]: this.state.JRC_AR_notes
      })
      this.setState({changed: false})
    }
  }

  render() {
    return (
      <div className="treatment-save-box" onMouseLeave={() => this.handleSave(this.props.type)}>
        <div className="treatment-rows">
          <h4>Sensory Motor</h4>
          <textarea 
            placeholder="notes"
            name="sensory"
            onChange={(event) => this.handleChange(event)}
            value={this.state.sensory}
          ></textarea>
        </div>
        <div className="treatment-rows">
          <h4>Task</h4>
          <textarea 
            placeholder="notes"
            name="task"
            onChange={(event) => this.handleChange(event)}
            value={this.state.task}
          ></textarea>
        </div>
        <div className="treatment-rows">
          <h4>Environment</h4>
          <textarea 
            placeholder="notes"
            name="environment"
            onChange={(event) => this.handleChange(event)}
            value={this.state.environment}
          ></textarea>
        </div>
        <div className="treatment-rows">
          <h4>Predictability</h4>
          <textarea 
            placeholder="notes"
            name="predictability"
            onChange={(event) => this.handleChange(event)}
            value={this.state.predictability}
          ></textarea>
        </div>
        <div className="treatment-rows">
          <h4>Self-Regulation</h4>
          <textarea 
            placeholder="notes"
            name="self_regulation"
            onChange={(event) => this.handleChange(event)}
            value={this.state.self_regulation}
          ></textarea>
        </div>
        <div className="treatment-rows">
          <h4>Interaction</h4>
          <textarea
            placeholder="notes"
            name="interaction"
            onChange={(event) => this.handleChange(event)}
            value={this.state.interaction}
          ></textarea>
        </div>
        <div className="treatment-rows">
          <h4>JRC/AR</h4>
          <textarea 
            placeholder="notes"
            name="JRC_AR_notes"
            onChange={(event) => this.handleChange(event)}
            value={this.state.JRC_AR_notes}
          ></textarea>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateTreatmentPlans: (treatmentPlanObject) => {
    console.log(treatmentPlanObject)
    // dispatch(actions.updateTreatmentPlans(stuff))
  }
})

export default connect(null, mapDispatchToProps)(TreatmentPlanModule);
