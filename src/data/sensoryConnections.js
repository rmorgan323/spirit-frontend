const sensoryConnections = {
  sen_1_ability: {
    marked: false,
    connections: ['sen_2_affordance', 'exe_2b_global', 'sen_6_visual']
  },
  sen_1_classification: {
    marked: false,
    connections: ['sen_1_ability', 'Executive']
  },
  sen_1_figure: {
    marked: false,
    connections: ['sen_1_ability', 'sen_6_visual']
  },
  sen_1_inferences: {
    marked: false,
    connections: ['sen_2_affordance']
  },
  sen_1_match: {
    marked: false,
    connections: ['sen_1_ability']
  },
  sen_1_spatial: {
    marked: false,
    connections: ['exe_4a_spatial', 'sen_6_visual']
  },
  sen_2_affordance: {
    marked: false,
    connections: ['sen_1_inferences']
  },
  sen_2_generativity: {
    marked: false,
    connections: ['Executive']
  },
  sen_2_imitation: {
    marked: false,
    connections: ['pos_5_interactive', 'sen_2_imitation', 'soc_2_imitation']
  },
  sen_2_initiation: {
    marked: false,
    connections: ['exe_3_initiation']
  },
  sen_3_modification: {
    marked: false,
    connections: ['exe_3_monitoring']
  },
  sen_3_schema_expansion: {
    marked: false,
    connections: ['sen_2_generativity', 'Executive']
  },
  sen_3_schema_selection: {
    marked: false,
    connections: ['Executive']
  },
  sen_3_sequencing: {
    marked: false,
    connections: ['exe_3_sequencing']
  },
  sen_3_sequencing_gestalt: {
    marked: false,
    connections: ['exe_2b_global']
  },
  sen_4_control: {
    marked: false,
    connections: ['Postural']
  },
  sen_4_monitoring: {
    marked: false,
    connections: ['exe_3_monitoring', 'sen_3_modification']
  },
  sen_4_spatial: {
    marked: false,
    connections: ['exe_4a_spatial']
  },
  sen_4_temporal: {
    marked: false,
    connections: ['exe_4a_spatial']
  },
  sen_4_timing: {
    marked: false,
    connections: ['exe_4a_spatial', 'Postural']
  },
  sen_4_timing_force: {
    marked: false,
    connections: ['Postural']
  },
  sen_5_fine: {
    marked: false,
    connections: ['Postural', 'sen_5_postural', 'sen_5_limb']
  },
  sen_5_gross: {
    marked: false,
    connections: ['Postural']
  },
  sen_5_limb: {
    marked: false,
    connections: ['sen_5_gross', 'sen_5_fine', 'sen_5_postural', 'Postural']
  },
  sen_5_ocular: {
    marked: false,
    connections: ['Postural', 'exe_1_orient']
  },
  sen_5_oral: {
    marked: false,
    connections: ['Postural', 'pos_5_suck']
  },
  sen_5_postural: {
    marked: false,
    connections: ['Postural']
  },
  sen_5_projected: {
    marked: false,
    connections: ['Postural']
  },
  sen_5_tool: {
    marked: false,
    connections: ['Postural', 'sen_5_postural', 'sen_5_limb']
  },
  sen_6_bmc: {
    marked: false,
    connections: ['Postural', 'sen_h_vestibular', 'sen_h_proprioception', 'sen_h_tactile']
  },
  sen_6_generalized: {
    marked: false,
    connections: ['Postural', 'Executive']
  },
  sen_6_praxis: {
    marked: false,
    connections: ['Executive']
  },
  sen_6_somatodyspraxia: {
    marked: false,
    connections: ['Postural', 'sen_h_vestibular', 'sen_h_proprioception', 'sen_h_tactile']
  },
  sen_6_visual: {
    marked: false,
    connections: ['Postural', 'sen_1_ability', 'sen_1_match', 'sen_1_classification', 'sen_1_spatial']
  },
  sen_h_auditory: {
    marked: false,
    connections: ['Modulation', 'Postural', 'Social', 'Executive']
  },
  sen_h_intero: {
    marked: false,
    connections: ['Modulation', 'Postural', 'Social', 'Executive']
  },
  sen_h_proprioception: {
    marked: false,
    connections: ['Modulation', 'Postural', 'Social', 'Executive']
  },
  sen_h_tactile: {
    marked: false,
    connections: ['Modulation', 'Postural', 'Social', 'Executive']
  },
  sen_h_vestibular: {
    marked: false,
    connections: ['Modulation', 'Postural', 'Social', 'Executive']
  },
  sen_h_visual: {
    marked: false,
    connections: ['Modulation', 'Postural', 'Social', 'Executive']
  }
};

export default sensoryConnections;
