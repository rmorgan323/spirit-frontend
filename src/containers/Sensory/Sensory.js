import React, { Component } from 'react';
import SessionHeader from '../SessionHeader/SessionHeader';
import CategorySliders from '../../components/CategorySliders/CategorySliders';
import './Sensory.css';

class Sensory extends Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    return (
      <div className="Sensory">
        <SessionHeader 
          title={'Sensory Discrimination Capacities'}
          headings={['Vestibular', 'Proprioception', 'Tactile', 'Auditory', 'Visual', 'Intero']}
        />
        <div className="category-content">
          <CategorySliders 
            title={'Sensory Discrimination / Perceptual Skills'}
            slidersArray={['Ability to Recognize', 'Match', 'Classification', 'Spatial Organization', 'Figure Ground Perception', 'Inferences and Abstractions (logic)']}
          />
          <CategorySliders 
            title={'Ideation'}
            slidersArray={['Initiation', 'Imitation (mimic or emulate?)', 'Affordance-based (obvious, imitative or expands?)', 'Generativity']}
          />
          <CategorySliders 
            title={'Planning'}
            slidersArray={['Sequencing', 'Sequencing/Gestalt', 'Schema Selection', 'Schema Expansion', 'Modification']}
          />
          <CategorySliders 
            title={'Execution'}
            slidersArray={['Timing', 'Timing/Force', 'Spatial', 'Temporal', 'Control (Postural; FF; FB)', 'Monitoring']}
          />
          <CategorySliders 
            slidersArray={['Oral', 'Ocular', 'Postural', 'Limb', 'Gross', 'Fine', 'Tool/Object', 'Projected Action Sequences']}
          />
          <CategorySliders 
            title={"Ayres' Factors"}
            slidersArray={['Somatodyspraxia', 'Visual Dyspraxia', 'Generalized Dyspraxis', 'BMC/Balance/Sequencing/ML', 'Praxis on Verbal Command']}
          />
        </div>
      </div>
    )
  }
}

export default Sensory;