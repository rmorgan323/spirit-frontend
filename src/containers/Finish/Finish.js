import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import TreatmentPlans from '../../components/TreatmentPlans/TreatmentPlans';
import TherapyGoals from '../TherapyGoals/TherapyGoals';
import * as actions from '../../actions';
import './Finish.css';

export class Finish extends Component {
  
  render() {
    return (
      <div className="Finish">

        <div className="finish-button-holder">
          <p>We recommend looking at session results before writing treatment plans <span className="arrow-right">&#10145;</span></p>
          <NavLink 
            className="join-link" 
            to={`/spirit/sessions/${this.props.selectedSession.id}/view`}
          >
            <button 
              className="session-result-button"
            >SEE SESSION RESULTS
            </button>
          </NavLink>
        </div>

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

        <div className="finish-button-holder">
          <NavLink 
            className="join-link" 
            to={`/spirit/sessions/${this.props.selectedSession.id}/view`}
          >
            <button 
              className="session-result-button"
            >SEE SESSION RESULTS
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = store => ({
  selectedSession: store.selectedSession,
  selectedConcern: store.selectedConcern
});

export default connect(mapStateToProps, mapDispatchToProps)(Finish);

Finish.propTypes = {
  updateSession: PropTypes.func,
  selectedSession: PropTypes.object,
  history: PropTypes.object,
  selectedConcern: PropTypes.object
};
