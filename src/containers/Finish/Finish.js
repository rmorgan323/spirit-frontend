import React, { Component } from 'react';
import './Finish.css';
import TreatmentPlans from '../../containers/TreatmentPlans/TreatmentPlans';
import TherapyGoals from '../../containers/TherapyGoals/TherapyGoals';

class Finish extends Component {

  render() {
    return (
      <div>
        <TreatmentPlans />
        <TherapyGoals 
          category="modulation_"
          title="Modulation"
          number="1"
        />
        <TherapyGoals 
          category="posture_"
          title="Postural"
          number="2"
        />
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
      </div>
    )
  }
}

export default Finish;