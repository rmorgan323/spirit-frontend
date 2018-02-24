import React, { Component } from 'react';
import './Finish.css';
import TreatmentPlans from '../TreatmentPlans/TreatmentPlans';
import TherapyGoals from '../../containers/TherapyGoals/TherapyGoals';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions';

class Finish extends Component {

  completeSessionNow = () => {
    this.props.updateSession(this.props.selectedSession.id, {completed: true})
    this.props.history.push(`/spirit/concerns/${this.props.selectedConcern.id}/sessions`);
  }

  render() {
    return (
      <div className="Finish">

        <h2 className="finish-headings">Treatment Plans</h2>

        <TreatmentPlans />

        <h2 className="finish-headings">Therapy Goals</h2>

        <TherapyGoals category="modulation_" title="Modulation" number="1" />

        <TherapyGoals category="posture_" title="Postural" number="2" />

        <TherapyGoals
          category="sensory_discrimination_"
          title="Sensory Discrimination"
          number="3"
        />

        <TherapyGoals
          category="social_emotional_"
          title="Social/Emotional Development"
          number="4"
        />

        <TherapyGoals
          category="executive_functioning_"
          title="Executive Functioning"
          number="5"
        />

        <button 
          className="complete-session-button"
          onClick={() => this.completeSessionNow()}
        >COMPLETE SESSION</button>


        <NavLink className="join-link" to={`/spirit/sessions/${this.props.selectedSession.id}/view`}>
          <button 
            className="session-result-button"
          >SEE ALL SESSION RESULTS
          </button>
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  selectedSession: store.selectedSession,
  selectedConcern: store.selectedConcern
})

const mapDispatchToProps = dispatch => ({
  updateSession: (sessionId, status) => {
    dispatch(actions.updateSession(sessionId, status))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Finish);
