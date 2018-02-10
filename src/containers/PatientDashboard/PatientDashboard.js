import React, { Component } from 'react';
import './PatientDashboard.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Concerns from '../../components/Concerns/Concerns';
import Sam from '../Sam/Sam';
import Sensory from '../Sensory/Sensory';


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

  handleSave = (concern, d1, d2, d3, d4, d5, d6, notes) => {
    this.props.addConcern({ concern: concern, d1: d1, d2: d2, d3: d3, d4: d4, d5: d5, d6: d6, notes: notes });
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
            onClick={() => this.handleSave(this.state.concernInput, this.state.domain1, this.state.domain2, this.state.domain3, this.state.domain4, this.state.domain5, this.state.domain6, this.state.notesInput)}
          >save</button>
          <button className="select-primary-concern">SELECT</button>
        </div>

        <Sam />

        <Sensory />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  concerns: store.concerns
})


const mapDispatchToProps = dispatch => ({
  addConcern: (concernObject) => {
    dispatch(actions.addConcern(concernObject));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientDashboard);




