import React from 'react';
import SessionHeader from '../SessionHeader/SessionHeader';
import CategorySliders from '../CategorySliders/CategorySliders';
import './Sensory.css';

const Sensory = () => {
  return (
    <div className="Sensory">
      <SessionHeader
        title={'Sensory Discrimination Capacities'}
        headings={[
          'Vestibular',
          'Proprioception',
          'Tactile',
          'Auditory',
          'Visual',
          'Intero'
        ]}
        databaseNamesArray={[
          'sen_h_vestibular',
          'sen_h_proprioception',
          'sen_h_tactile',
          'sen_h_auditory',
          'sen_h_visual',
          'sen_h_intero'
        ]}
      />

      <div className="category-content">
        <CategorySliders
          title={'Sensory Discrimination / Perceptual Skills'}
          slidersArray={[
            'Ability to Recognize',
            'Match',
            'Classification',
            'Spatial Organization',
            'Figure Ground Perception',
            'Inferences and Abstractions (logic)'
          ]}
          databaseNamesArray={[
            'sen_1_ability',
            'sen_1_match',
            'sen_1_classification',
            'sen_1_spatial',
            'sen_1_figure',
            'sen_1_inferences'
          ]}
        />

        <CategorySliders
          title={'Ideation'}
          slidersArray={[
            'Initiation',
            'Imitation (mimic or emulate?)',
            'Affordance-based (obvious, imitative or expands?)',
            'Generativity'
          ]}
          databaseNamesArray={[
            'sen_2_initiation',
            'sen_2_imitation',
            'sen_2_affordance',
            'sen_2_generativity'
          ]}
        />

        <CategorySliders
          title={'Planning'}
          slidersArray={[
            'Sequencing',
            'Sequencing/Gestalt',
            'Schema Selection',
            'Schema Expansion',
            'Modification'
          ]}
          databaseNamesArray={[
            'sen_3_sequencing',
            'sen_3_sequencing_gestalt',
            'sen_3_schema_selection',
            'sen_3_schema_expansion',
            'sen_3_modification'
          ]}
        />

        <CategorySliders
          title={'Execution'}
          slidersArray={[
            'Timing',
            'Timing/Force',
            'Spatial',
            'Temporal',
            'Control (Postural; FF; FB)',
            'Monitoring'
          ]}
          databaseNamesArray={[
            'sen_4_timing',
            'sen_4_timing_force',
            'sen_4_spatial',
            'sen_4_temporal',
            'sen_4_control',
            'sen_4_monitoring'
          ]}
        />

        <CategorySliders
          title={"Skill Domain"}
          slidersArray={[
            'Oral',
            'Ocular',
            'Postural',
            'Limb',
            'Gross',
            'Fine',
            'Tool/Object',
            'Projected Action Sequences'
          ]}
          databaseNamesArray={[
            'sen_5_oral',
            'sen_5_ocular',
            'sen_5_postural',
            'sen_5_limb',
            'sen_5_gross',
            'sen_5_fine',
            'sen_5_tool',
            'sen_5_projected'
          ]}
        />

        <CategorySliders
          title={"Ayres' Factors"}
          slidersArray={[
            'Somatodyspraxia',
            'Visual Dyspraxia',
            'Generalized Dyspraxis',
            'BMC/Balance/Sequencing/ML',
            'Praxis on Verbal Command'
          ]}
          databaseNamesArray={[
            'sen_6_somatodyspraxia',
            'sen_6_visual',
            'sen_6_generalized',
            'sen_6_bmc',
            'sen_6_praxis'
          ]}
        />
      </div>
    </div>
  );
};

export default Sensory;
