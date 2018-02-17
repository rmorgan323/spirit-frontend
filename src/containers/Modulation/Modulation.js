import React from 'react';
import SessionHeader from '../SessionHeader/SessionHeader';
import CategorySliders from '../../components/CategorySliders/CategorySliders';
import './Modulation.css';

const Modulation = () => {
  
  return (
    <div className="Modulation">
      <SessionHeader 
        title={'Modulation Capacities: Sensory Modulation to Self-Regulation'}
        headings={['Vestibular', 'Proprioception', 'Tactile', 'Auditory', 'Visual', 'Intero']}
        databaseNamesArray={['mod_h_vestibular', 'mod_h_proprioception', 'mod_h_tactile', 'mod_h_auditory', 'mod_h_visual', 'mod_h_intero']}
      />
      <div className="category-content">
        <CategorySliders 
          slidersArray={['Defensiveness', 'Over', 'Under', 'Variable', 'Arousability']}
          databaseNamesArray={['mod_1_defensiveness', 'mod_1_over', 'mod_1_under', 'mod_1_variable', 'mod_1_arousability']}
          reminderAsterisk={[null, '*', '*', '*', '*']}
          reminder={'* If selected, remember to make a hypothesized arousal chart.'}
        />
        <CategorySliders 
          title={'Capacities'}
          slidersArray={['Attention', 'Action', 'Affect', 'Autonomic']}
          databaseNamesArray={['mod_2_attention', 'mod_2_action', 'mod_2_affect', 'mod_2_autonomic']}
        />
        <CategorySliders 
          title={'Self-Regulation'}
          slidersArray={['Physiological', 'Sensory', 'Motor', 'Emotional', 'Cognitive', 'Social', 'Prosocial']}
          databaseNamesArray={['mod_3_physiological', 'mod_3_sensory', 'mod_3_motor', 'mod_3_emotional', 'mod_3_cognitive', 'mod_3_social', 'mod_3_prosocial']}
        />
        <CategorySliders 
          title={'Regulatory Capacities'}
          slidersArray={['Passive', 'Co-Regulation', 'Approach', 'Adaptive']}
          databaseNamesArray={['mod_4a_passive', 'mod_4a_co_regulation', 'mod_4a_approach', 'mod_4a_adaptive']}
        />
        <CategorySliders 
          slidersArray={['Active', 'Self-Regulation', 'Avoid', 'Maladaptive']}
          databaseNamesArray={['mod_4b_active', 'mod_4b_self_regulation', 'mod_4b_avoid', 'mod_4b_maladaptive']}
        />
      </div>
    </div>
  )
}

export default Modulation;