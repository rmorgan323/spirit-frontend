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
    connections: [b1, b13, b14]
  },
  pos_5_alignment_orient: {
    marked: false,
    connections: [b1, b13, b14, b15]
  },
  pos_5_anticipatory: {
    marked: false,
    connections: [e15]
  },
  pos_5_antigravity: {
    marked: false,
    connections: [b1, b24, b25, b26, b27]
  },
  pos_5_interactive: {
    marked: false,
    connections: [c9, d13, d15]
  },
  pos_5_ocular: {
    marked: false,
    connections: []
  },
  pos_5_reflex: {
    marked: false,
    connections: [b1, b24, b25, b26, b27]
  },
  pos_5_suck: {
    marked: false,
    connections: [c23]
  },
  pos_6_bilateral: {
    marked: false,
    connections: [b13, b14]
  },
  pos_6_effortful: {
    marked: false,
    connections: [a7, e21]
  },
  pos_6_grasp: {
    marked: false,
    connections: [b19]
  },
  pos_6_push: {
    marked: false,
    connections: [b13, b14, b15, b21]
  },
  pos_6_strength: {
    marked: false,
    connections: []
  },
  pos_h_auditory: {
    marked: false,
    connections: [a1, b1, c1, d1, e1]
  },
  pos_h_intero: {
    marked: false,
    connections: [a1, b1, c1, d1, e1]
  },
  pos_h_proprioception: {
    marked: false,
    connections: [a1, b1, c1, d1, e1]
  },
  pos_h_tactile: {
    marked: false,
    connections: [a1, b1, c1, d1, e1]
  },
  pos_h_vestibular: {
    marked: false,
    connections: [a1, b1, c1, d1, e1]
  },
  pos_h_visual: {
    marked: false,
    connections: [a1, b1, c1, d1, e1]
  }
};

export default postureConnections;
