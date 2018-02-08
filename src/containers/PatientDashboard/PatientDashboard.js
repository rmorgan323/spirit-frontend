import React, { Component } from 'react';

class PatientDashboard extends Component {

  render() {
    return (
      <div className="PatientDashboard">

        <div className="header-row">
          <h2>Primary Concerns</h2>
          <h2>Domains</h2>
          <h2>Notes</h2>
        </div>

        {/* Existing Concerns go here in another component */}

        <div className="input-row">
          <input className="primary-concern" placeholder="Add Concern" ></input>
          <p>
            <span className="domain-1">1</span>
            <span className="domain-2">2</span>
            <span className="domain-3">3</span>
            <span className="domain-4">4</span>
            <span className="domain-5">5</span>
            <span className="domain-6">6</span>
          </p>
          <input className="primary-concern-notes" placeholder="Add Notes" ></input>
          <button className="save-primary-concern">SAVE</button>
          <button className="select-primary-concern">SELECT</button>
        </div>

      </div>
    )
  }
}

export default PatientDashboard;