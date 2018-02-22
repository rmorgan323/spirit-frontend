/*eslint-disable camelcase*/

const posturalConnections = {
  pos_1_inner: [],
  pos_1_outer: [],
  pos_2_mobility: [],
  pos_2_muscle: [],
  pos_2_phasic: [],
  pos_2_stability: [],
  pos_2_tonic: [],
  pos_3_frontal: [],
  pos_3_midlines: [],
  pos_3_sagittal: [],
  pos_3_transverse: [],
  pos_4_core: [
    'sen_5_fine',
    'sen_5_gross',
    'sen_5_limb',
    'sen_5_ocular',
    'sen_5_oral',
    'sen_5_postural',
    'sen_5_projected',
    'sen_5_tool'
  ],
  pos_4_eyes: [
    'sen_5_fine',
    'sen_5_gross',
    'sen_5_limb',
    'sen_5_ocular',
    'sen_5_oral',
    'sen_5_postural',
    'sen_5_projected',
    'sen_5_tool'
  ],
  pos_4_foot: [
    'sen_5_fine',
    'sen_5_gross',
    'sen_5_limb',
    'sen_5_ocular',
    'sen_5_oral',
    'sen_5_postural',
    'sen_5_projected',
    'sen_5_tool'
  ],
  pos_4_hand: [
    'sen_5_fine',
    'sen_5_gross',
    'sen_5_limb',
    'sen_5_ocular',
    'sen_5_oral',
    'sen_5_postural',
    'sen_5_projected',
    'sen_5_tool'
  ],
  pos_4_head: [
    'sen_5_fine',
    'sen_5_gross',
    'sen_5_limb',
    'sen_5_ocular',
    'sen_5_oral',
    'sen_5_postural',
    'sen_5_projected',
    'sen_5_tool'
  ],
  pos_4_lower: [
    'sen_5_fine',
    'sen_5_gross',
    'sen_5_limb',
    'sen_5_ocular',
    'sen_5_oral',
    'sen_5_postural',
    'sen_5_projected',
    'sen_5_tool'
  ],
  pos_4_pelvic: [
    'sen_5_fine',
    'sen_5_gross',
    'sen_5_limb',
    'sen_5_ocular',
    'sen_5_oral',
    'sen_5_postural',
    'sen_5_projected',
    'sen_5_tool'
  ],
  pos_4_shoulder: [
    'sen_5_fine',
    'sen_5_gross',
    'sen_5_limb',
    'sen_5_ocular',
    'sen_5_oral',
    'sen_5_postural',
    'sen_5_projected',
    'sen_5_tool'
  ],
  pos_5_alignment_COG: ['pos_5_antigravity', 'pos_5_reflex'],
  pos_5_alignment_orient: [
    'pos_5_antigravity',
    'pos_5_reflex',
    'pos_5_alignment_COG'
  ],
  pos_5_anticipatory: ['exe_4a_future'],
  pos_5_antigravity: [
    'pos_h_vestibular',
    'pos_h_proprioception',
    'pos_h_tactile',
    'pos_h_auditory'
  ],
  pos_5_interactive: ['sen_2_imitation', 'soc_2_imitation', 'soc_2_contingent'],
  pos_5_ocular: [],
  pos_5_reflex: [
    'pos_h_vestibular',
    'pos_h_proprioception',
    'pos_h_tactile',
    'pos_h_auditory'
  ],
  pos_5_suck: ['sen_5_oral'],
  pos_6_bilateral: ['pos_5_antigravity', 'pos_5_reflex'],
  pos_6_effortful: ['mod_2_action', 'exe_4b_effortful'],
  pos_6_grasp: ['pos_6_push'],
  pos_6_push: [
    'pos_5_antigravity',
    'pos_5_reflex',
    'pos_5_alignment_COG',
    'pos_6_grasp'
  ],
  pos_6_strength: [],
  pos_h_auditory: ['modulation', 'sensory', 'social', 'executive'],
  pos_h_intero: ['modulation', 'sensory', 'social', 'executive'],
  pos_h_proprioception: ['modulation', 'sensory', 'social', 'executive'],
  pos_h_tactile: ['modulation', 'sensory', 'social', 'executive'],
  pos_h_vestibular: ['modulation', 'sensory', 'social', 'executive'],
  pos_h_visual: ['modulation', 'sensory', 'social', 'executive']
};

export default posturalConnections;