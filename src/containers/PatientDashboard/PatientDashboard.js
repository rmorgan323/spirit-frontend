import React, { Component } from 'react';
import './PatientDashboard.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Concerns from '../../components/Concerns/Concerns';
import Sam from '../Sam/Sam';

class PatientDashboard extends Component {
  constructor() {
    super();

    this.state = {
      concernInput: '',
      domain1: false,
      domain2: false,
      domain3: false,
      domain4: false,
      domain5: false,
      domain6: false,
      notesInput: ''
    }
  }

  toggleDomain = (val) => {
    this.state[val] === false ? this.setState({[val]: true}) : this.setState({[val]: false})
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({[name]: value })
  }

  handleSave = (concern, d1, d2, d3, d4, d5, d6, notes, id) => {
    this.props.addConcern({ description: concern, domain_1: d1, domain_2: d2, domain_3: d3, domain_4: d4, domain_5: d5, domain_6: d6, notes: notes, patient_id: id });
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({
      concernInput: '',
      domain1: false,
      domain2: false,
      domain3: false,
      domain4: false,
      domain5: false,
      domain6: false,
      notesInput: ''
    })
  }

  render() {
    return (
      <div className="PatientDashboard">

        <div className="pd-header-row">
          <h3 className="pd-first">Primary Concerns</h3>
          <h3 className="pd-second">Domains</h3>
          <h3 className="pd-third">Notes</h3>
        </div>

        <Concerns />

        <div className="pd-input-row">
          <input 
            className="primary-concern" 
            placeholder="Add Concern" 
            value={this.state.concernInput}
            onChange={(event) => this.handleChange(event)}
            name="concernInput"
          ></input>
          <p>
            <span 
              onClick={(event) => this.toggleDomain('domain1')} 
              className={this.state.domain1 === false ? "domains" : "domains sam-1 domains-true"}>1
            </span>
            <span 
              onClick={(event) => this.toggleDomain('domain2')} 
              className={this.state.domain2 === false ? "domains" : "domains sam-2 domains-true"}>2
            </span>
            <span 
              onClick={(event) => this.toggleDomain('domain3')} 
              className={this.state.domain3 === false ? "domains" : "domains sam-3 domains-true"}>3
            </span>
            <span 
              onClick={(event) => this.toggleDomain('domain4')} 
              className={this.state.domain4 === false ? "domains" : "domains sam-4 domains-true"}>4
            </span>
            <span 
              onClick={(event) => this.toggleDomain('domain5')} 
              className={this.state.domain5 === false ? "domains" : "domains sam-5 domains-true"}>5
            </span>
            <span 
              onClick={(event) => this.toggleDomain('domain6')} 
              className={this.state.domain6 === false ? "domains" : "domains sam-6 domains-true"}>6
            </span>
          </p>
          <input 
            className="primary-concern-notes"
            value={this.state.notesInput}
            placeholder="Add Notes"
            onChange={(event) => this.handleChange(event)}
            name="notesInput"
          ></input>
          <button 
            className="save-primary-concern"
            onClick={() => this.handleSave(this.state.concernInput, this.state.domain1, this.state.domain2, this.state.domain3, this.state.domain4, this.state.domain5, this.state.domain6, this.state.notesInput, this.props.currentPatient.id)}
          >save</button>
        </div>

        <div className="sam-holder">
          <img className="sam-image" src="/assets/sam-new.svg" />
          <div className="sam-dot-1 sam-dots">1</div>
          <div className="sam-dot-2 sam-dots">2</div>
          <div className="sam-dot-3 sam-dots">3</div>
          <div className="sam-dot-4 sam-dots">4</div>
          <div className="sam-dot-5 sam-dots">5</div>
          <div className="sam-dot-6 sam-dots">6</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  patientConcerns: store.patientConcerns,
  currentPatient: store.currentPatient
})


const mapDispatchToProps = dispatch => ({
  addConcern: (concernObject) => {
    dispatch(actions.addConcern(concernObject));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientDashboard);

