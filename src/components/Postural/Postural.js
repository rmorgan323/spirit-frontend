import React from 'react';
import SessionHeader from '../SessionHeader/SessionHeader';
import CategorySliders from '../../components/CategorySliders/CategorySliders';
import BodyDiagram from '../BodyDiagram/BodyDiagram';
import YesNoQuestions from '../../components/YesNoQuestions/YesNoQuestions';
import './Postural.css';

const Postural = () => {
  return (
    <div className="Postural">
      <SessionHeader
        title={'Postural/Core Movement Capacities'}
        headings={[
          'Vestibular',
          'Proprioception',
          'Tactile',
          'Auditory',
          'Visual',
          'Intero'
        ]}
        databaseNamesArray={[
          'pos_h_vestibular',
          'pos_h_proprioception',
          'pos_h_tactile',
          'pos_h_auditory',
          'pos_h_visual',
          'pos_h_intero'
        ]}
      />

      <div className="category-content">
        <YesNoQuestions
          title={'Core Development'}
          questionsArray={['Outer Core', 'Inner Core']}
          databaseNamesArray={['pos_1_outer', 'pos_1_inner']}
        />

        <CategorySliders
          title={'Quality of Movement'}
          slidersArray={[
            'Stability',
            'Mobility',
            'Tonic',
            'Phasic',
            'Muscle Tone'
          ]}
          databaseNamesArray={[
            'pos_2_stability',
            'pos_2_mobility',
            'pos_2_tonic',
            'pos_2_phasic',
            'pos_2_muscle'
          ]}
        />

        <CategorySliders
          title={'Planes of Movement'}
          slidersArray={[
            'Sagittal: Flex/Ext',
            'Frontal: Lateral',
            'Transverse: Rotational',
            'Midlines of each plane'
          ]}
          databaseNamesArray={[
            'pos_3_sagittal',
            'pos_3_frontal',
            'pos_3_transverse',
            'pos_3_midlines'
          ]}
        />

        <BodyDiagram />

        <CategorySliders
          title={'Automatic Actions'}
          slidersArray={[
            'Suck/Swallow/Breath',
            'Ocular within Postural Control',
            'Antigravity Control',
            'Reflex Integration/Sensory Motor Patterns',
            'Alignment/COG over BOS',
            'Alignment/Orient to Stimulus or Goal',
            'Anticipatory Control',
            'Interactive Oscillator and Imitative Action'
          ]}
          databaseNamesArray={[
            'pos_5_suck',
            'pos_5_ocular',
            'pos_5_antigravity',
            'pos_5_reflex',
            'pos_5_alignment_COG',
            'pos_5_alignment_orient',
            'pos_5_anticipatory',
            'pos_5_interactive'
          ]}
        />

        <CategorySliders
          title={'Voluntary Actions'}
          slidersArray={[
            'Push/Pull/Reach',
            'Bilateral Symmetrical/Bilateral Asymmetrical/Unilateral',
            'Grasp/Release',
            'Strength/Endurance/Flexibility/BMI',
            'Effortful Control'
          ]}
          databaseNamesArray={[
            'pos_6_push',
            'pos_6_bilateral',
            'pos_6_grasp',
            'pos_6_strength',
            'pos_6_effortful'
          ]}
        />
      </div>
    </div>
  );
};

export default Postural;
