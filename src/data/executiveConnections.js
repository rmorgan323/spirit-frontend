/*eslint-disable camelcase*/

const executiveConnections = {
  exe_1_inhibition: ['modulation', 'postural', 'sensory', 'social'],
  exe_1_orient: ['modulation', 'postural', 'sensory'],
  exe_2a_shifting: [],
  exe_2a_working: ['exe_1_inhibition'],
  exe_2b_flexibility: [],
  exe_2b_general: [],
  exe_2b_global: [],
  exe_2b_spatial: [],
  exe_2b_verbal: ['exe_4a_internalized'],
  exe_3_initiation: ['modulation'],
  exe_3_monitoring: ['soc_2_self_awareness'],
  exe_3_planning: ['pos_5_anticipatory', 'exe_4a_future'],
  exe_3_sequencing: [],
  exe_4a_future: ['modulation', 'social', 'soc_2_social_motivators'],
  exe_4a_internalized: [],
  exe_4a_problem: ['soc_1_problem'],
  exe_4a_reflective: ['soc_1_reflective'],
  exe_4a_spatial: ['sensory'],
  exe_4b_effortful: ['mod_2_action', 'exe_1_inhibition'],
  exe_4b_motivational: ['modulation', 'social', 'soc_2_social_motivators'],
  exe_4b_self_compassion: ['soc_3_self_compassion'],
  exe_4b_self_control: ['soc_3_self_control'],
  exe_4b_self_regulation: ['mod_4b_self_regulation', 'soc_3_self_regulation']
};

export default executiveConnections;
