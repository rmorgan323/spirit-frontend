import React, { Component } from 'react';
import './Finish.css';
import TreatmentPlans from '../TreatmentPlans/TreatmentPlans';
import TherapyGoals from '../../containers/TherapyGoals/TherapyGoals';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Finish extends Component {

  completeSessionNow = () => {
    this.props.updateSession(this.props.selectedSession.id, {completed: true})
  }

  render() {
    return (
      <div className="Finish">
        <TreatmentPlans />

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
      </div>
    );
  }
}

const mapStateToProps = store => ({
  selectedSession: store.selectedSession
})

const mapDispatchToProps = dispatch => ({
  updateSession: (sessionId, status) => {
    dispatch(actions.updateSession(sessionId, status))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Finish);
