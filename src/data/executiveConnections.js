const executiveConnections = {
  exe_1_inhibition: {
    marked: false,
    connections: ['Modulation', 'Postural', 'Sensory', 'Social']
  },
  exe_1_orient: {
    marked: false,
    connections: ['Modulation', 'Postural', 'Sensory']
  },
  exe_2a_shifting: {
    marked: false,
    connections: []
  },
  exe_2a_working: {
    marked: false,
    connections: ['exe_1_inhibition']
  },
  exe_2b_flexibility: {
    marked: false,
    connections: []
  },
  exe_2b_general: {
    marked: false,
    connections: []
  },
  exe_2b_global: {
    marked: false,
    connections: []
  },
  exe_2b_spatial: {
    marked: false,
    connections: []
  },
  exe_2b_verbal: {
    marked: false,
    connections: ['exe_4a_internalized']
  },
  exe_3_initiation: {
    marked: false,
    connections: ['Modulation']
  },
  exe_3_monitoring: {
    marked: false,
    connections: ['soc_2_self_awareness']
  },
  exe_3_planning: {
    marked: false,
    connections: ['pos_5_anticipatory', 'exe_4a_future']
  },
  exe_3_sequencing: {
    marked: false,
    connections: []
  },
  exe_4a_future: {
    marked: false,
    connections: ['Modulation', 'Social', 'soc_2_social_motivators']
  },
  exe_4a_internalized: {
    marked: false,
    connections: []
  },
  exe_4a_problem: {
    marked: false,
    connections: ['soc_1_problem']
  },
  exe_4a_reflective: {
    marked: false,
    connections: ['soc_1_reflective']
  },
  exe_4a_spatial: {
    marked: false,
    connections: ['Sensory']
  },
  exe_4b_effortful: {
    marked: false,
    connections: ['mod_2_action', 'exe_1_inhibition']
  },
  exe_4b_motivational: {
    marked: false,
    connections: ['Modulation', 'Social', 'soc_2_social_motivators']
  },
  exe_4b_self_compassion: {
    marked: false,
    connections: ['soc_3_self_compassion']
  },
  exe_4b_self_control: {
    marked: false,
    connections: ['soc_3_self_control']
  },
  exe_4b_self_regulation: {
    marked: false,
    connections: ['mod_4b_self_regulation', 'soc_3_self_regulation']
  }
};

export default executiveConnections;
