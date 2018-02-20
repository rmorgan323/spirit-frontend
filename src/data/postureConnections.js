const postureConnections = {
  pos_1_inner: {
    marked: false,
    connections: []
  },
  pos_1_outer: {
    marked: false,
    connections: []
  },
  pos_2_mobility: {
    marked: false,
    connections: []
  },
  pos_2_muscle: {
    marked: false,
    connections: []
  },
  pos_2_phasic: {
    marked: false,
    connections: []
  },
  pos_2_stability: {
    marked: false,
    connections: []
  },
  pos_2_tonic: {
    marked: false,
    connections: []
  },
  pos_3_frontal: {
    marked: false,
    connections: []
  },
  pos_3_midlines: {
    marked: false,
    connections: []
  },
  pos_3_sagittal: {
    marked: false,
    connections: []
  },
  pos_3_transverse: {
    marked: false,
    connections: []
  },
  pos_4_core: {
    marked: false,
    connections: ['sen_5_fine', 'sen_5_gross', 'sen_5_limb', 'sen_5_ocular', 'sen_5_oral', 'sen_5_postural', 'sen_5_projected', 'sen_5_tool']
  },
  pos_4_eyes: {
    marked: false,
    connections: ['sen_5_fine', 'sen_5_gross', 'sen_5_limb', 'sen_5_ocular', 'sen_5_oral', 'sen_5_postural', 'sen_5_projected', 'sen_5_tool']
  },
  pos_4_foot: {
    marked: false,
    connections: ['sen_5_fine', 'sen_5_gross', 'sen_5_limb', 'sen_5_ocular', 'sen_5_oral', 'sen_5_postural', 'sen_5_projected', 'sen_5_tool']
  },
  pos_4_hand: {
    marked: false,
    connections: ['sen_5_fine', 'sen_5_gross', 'sen_5_limb', 'sen_5_ocular', 'sen_5_oral', 'sen_5_postural', 'sen_5_projected', 'sen_5_tool']
  },
  pos_4_head: {
    marked: false,
    connections: ['sen_5_fine', 'sen_5_gross', 'sen_5_limb', 'sen_5_ocular', 'sen_5_oral', 'sen_5_postural', 'sen_5_projected', 'sen_5_tool']
  },
  pos_4_lower: {
    marked: false,
    connections: ['sen_5_fine', 'sen_5_gross', 'sen_5_limb', 'sen_5_ocular', 'sen_5_oral', 'sen_5_postural', 'sen_5_projected', 'sen_5_tool']
  },
  pos_4_pelvic: {
    marked: false,
    connections: ['sen_5_fine', 'sen_5_gross', 'sen_5_limb', 'sen_5_ocular', 'sen_5_oral', 'sen_5_postural', 'sen_5_projected', 'sen_5_tool']
  },
  pos_4_shoulder: {
    marked: false,
    connections: ['sen_5_fine', 'sen_5_gross', 'sen_5_limb', 'sen_5_ocular', 'sen_5_oral', 'sen_5_postural', 'sen_5_projected', 'sen_5_tool']
  },
  pos_5_alignment_COG: {
    marked: false,
    connections: ['pos_5_antigravity', 'pos_5_reflex']
  },
  pos_5_alignment_orient: {
    marked: false,
    connections: ['pos_5_antigravity', 'pos_5_reflex', 'pos_5_alignment_COG']
  },
  pos_5_anticipatory: {
    marked: false,
    connections: ['exe_4a_future']
  },
  pos_5_antigravity: {
    marked: false,
    connections: ['pos_h_vestibular', 'pos_h_proprioception', 'pos_h_tactile', 'pos_h_auditory']
  },
  pos_5_interactive: {
    marked: false,
    connections: ['sen_2_imitation', 'soc_2_imitation', 'soc_2_contingent']
  },
  pos_5_ocular: {
    marked: false,
    connections: []
  },
  pos_5_reflex: {
    marked: false,
    connections: ['pos_h_vestibular', 'pos_h_proprioception', 'pos_h_tactile', 'pos_h_auditory']
  },
  pos_5_suck: {
    marked: false,
    connections: ['sen_5_oral']
  },
  pos_6_bilateral: {
    marked: false,
    connections: ['pos_5_antigravity', 'pos_5_reflex']
  },
  pos_6_effortful: {
    marked: false,
    connections: ['mod_2_action', 'exe_4b_effortful']
  },
  pos_6_grasp: {
    marked: false,
    connections: ['pos_6_push']
  },
  pos_6_push: {
    marked: false,
    connections: ['pos_5_antigravity', 'pos_5_reflex', 'pos_5_alignment_COG', 'pos_6_grasp']
  },
  pos_6_strength: {
    marked: false,
    connections: []
  },
  pos_h_auditory: {
    marked: false,
    connections: ['Modulation', 'Sensory', 'Social', 'Executive']
  },
  pos_h_intero: {
    marked: false,
    connections: ['Modulation', 'Sensory', 'Social', 'Executive']
  },
  pos_h_proprioception: {
    marked: false,
    connections: ['Modulation', 'Sensory', 'Social', 'Executive']
  },
  pos_h_tactile: {
    marked: false,
    connections: ['Modulation', 'Sensory', 'Social', 'Executive']
  },
  pos_h_vestibular: {
    marked: false,
    connections: ['Modulation', 'Sensory', 'Social', 'Executive']
  },
  pos_h_visual: {
    marked: false,
    connections: ['Modulation', 'Sensory', 'Social', 'Executive']
  }
};

export default postureConnections;
