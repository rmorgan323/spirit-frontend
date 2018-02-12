import React from 'react';
import SessionHeader from '../SessionHeader/SessionHeader';
import CategorySliders from '../../components/CategorySliders/CategorySliders';
import './Executive.css';

const Executive = () => {
  
  return (
    <div className="Executive">
      <SessionHeader 
        title={'Executive Functioning Capacities'}
        headings={[]}
      />
      <div className="category-content">
        <CategorySliders 
          slidersArray={['Orient EYES-EARS-SELF to GOAL', 'Inhibition']}
          databaseNamesArray={['exe_1_orient', 'exe_1_inhibition']}
        />
        <CategorySliders 
          slidersArray={['Working Memory', 'Shifting']}
          databaseNamesArray={['exe_2a_working', 'exe_2a_shifting']}
        />
        <CategorySliders 
          slidersArray={['Verbal', 'Spacial', 'General', 'Global/Local', 'Flexibility']}
          databaseNamesArray={['exe_2b_verbal', 'exe_2b_spatial', 'exe_2b_general', 'exe_2b_global', 'exe_2b_flexibility']}
        />
        <CategorySliders 
          slidersArray={['Inhibition', 'Shifting', 'Sequencing', 'Monitoring']}
          databaseNamesArray={['exe_3_inhibition', 'exe_3_shifting', 'exe_3_sequencing', 'exe_3_monitoring']}
        />
        <CategorySliders 
          slidersArray={['Future-Oriented/Goal-Directed', 'Spatial/Temporal Organization', 'Problem Solving', 'Reflective Thinking', 'Internalized Language']}
          databaseNamesArray={['exe_4a_future', 'exe_4a_spatial', 'exe_4a_problem', 'exe_4a_reflective', 'exe_4a_internalized']}
        />
        <CategorySliders 
          slidersArray={['Motivational Bias', 'Effortful Control', 'Self-Control', 'Self-Regulation', 'Self-Compassion']}
          databaseNamesArray={['exe_4b_motivational', 'exe_4b_effortful', 'exe_4b_self_control', 'exe_4b_self_regulation', 'exe_4b_self_compassion']}
        />
      </div>
    </div>
  )
}

export default Executive;