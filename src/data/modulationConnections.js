const modulationConnects = {
  mod_1_defensiveness: {
    marked: false,
    connections: ['soc_1_engagement']
  },
  mod_1_over: {
    marked: false,
    connections: ['soc_1_engagement']
  },
  mod_1_under: {
    marked: false,
    connections: ['soc_1_engagement']
  },
  mod_1_variable: {
    marked: false,
    connections: ['soc_1_engagement']
  },
  mod_2_action: {
    marked: false,
    connections: ['Posture', 'Social']
  },
  mod_2_affect: {
    marked: false,
    connections: ['Social', 'mod_3_emotional']
  },
  mod_2_arousability: {
    marked: false,
    connections: ['Social', 'exe_1_inhibition', 'exe_4b_motivational' ]
  },
  mod_2_attention: {
    marked: false,
    connections: ['soc_1_engagement', 'soc_1_problem', 'Executive', 'exe_2a_shifting']
  },
  mod_2_autonomic: {
    marked: false,
    connections: ['mod_3_physiological', 'mod_h_intero']
  },
  mod_3_cognitive: {
    marked: false,
    connections: ['Executive']
  },
  mod_3_emotional: {
    marked: false,
    connections: ['Social']
  },
  mod_3_motor: {
    marked: false,
    connections: ['Posture']
  },
  mod_3_physiological: {
    marked: false,
    connections: ['mod_2_autonomic', 'mod_h_intero']
  },
  mod_3_prosocial: {
    marked: false,
    connections: ['soc_3_affective', 'soc_2_self_awareness', 'Executive']
  },
  mod_3_sensory: {
    marked: false,
    connections: ['Sensory', 'mod_h_vestibular', 'mod_h_proprioception', 'mod_h_tactile', 'mod_h_intero']
  },
  mod_3_social: {
    marked: false,
    connections: ['Social']
  },
  mod_4a_adaptive: {
    marked: false,
    connections: ['mod_4b_self_regulation']
  },
  mod_4a_approach: {
    marked: false,
    connections: ['mod_4b_self_regulation']
  },
  mod_4a_co_regulation: {
    marked: false,
    connections: ['mod_4b_self_regulation', 'soc_1_engagement', 'soc_1_engagement', 'soc_1_reciprocity', 'soc_2_self_awareness']
  },
  mod_4a_passive: {
    marked: false,
    connections: ['mod_4b_self_regulation']
  },
  mod_4b_active: {
    marked: false,
    connections: ['mod_4b_self_regulation']
  },
  mod_4b_avoid: {
    marked: false,
    connections: ['mod_4b_self_regulation']
  },
  mod_4b_maladaptive: {
    marked: false,
    connections: ['mod_4b_self_regulation']
  },
  mod_4b_self_regulation: {
    marked: false,
    connections: ['soc_3_self_regulation', 'exe_4b_self_regulation']
  },
  mod_h_auditory: {
    marked: false,
    connections: ['Postural', 'Sensory', 'Social', 'Executive']
  },
  mod_h_intero: {
    marked: false,
    connections: ['Postural', 'Sensory', 'Social', 'Executive']
  },
  mod_h_proprioception: {
    marked: false,
    connections: ['Postural', 'Sensory', 'Social', 'Executive']
  },
  mod_h_tactile: {
    marked: false,
    connections: ['Postural', 'Sensory', 'Social', 'Executive']
  },
  mod_h_vestibular: {
    marked: false,
    connections: ['Postural', 'Sensory', 'Social', 'Executive']
  },
  mod_h_visual: {
    marked: false,
    connections: ['Postural', 'Sensory', 'Social', 'Executive']
  }
};

export default modulationConnects;
