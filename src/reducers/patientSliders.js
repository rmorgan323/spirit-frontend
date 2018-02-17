let defaultStore = {
  sen_h_vestibular: null,
  sen_h_proprioception: null,
  sen_h_tactile: null,
  sen_h_auditory: null,
  sen_h_visual: null,
  sen_h_intero: null,
  sen_1_ability: null,
  sen_1_match: null,
  sen_1_classification: null,
  sen_1_spatial: null,
  sen_1_figure: null,
  sen_1_inferences: null,
  sen_2_initiation: null,
  sen_2_imitation: null,
  sen_2_affordance: null,
  sen_2_generativity: null,
  sen_3_sequencing: null,
  sen_3_sequencing_gestalt: null,
  sen_3_schema_selection: null,
  sen_3_schema_expansion: null,
  sen_3_modification: null,
  sen_4_timing: null,
  sen_4_timing_force: null,
  sen_4_spatial: null,
  sen_4_temporal: null,
  sen_4_control: null,
  sen_4_monitoring: null,
  sen_5_oral: null,
  sen_5_ocular: null,
  sen_5_postural: null,
  sen_5_limb: null,
  sen_5_gross: null,
  sen_5_fine: null,
  sen_5_tool: null,
  sen_5_projected: null,
  sen_6_somatodyspraxia: null,
  sen_6_visual: null,
  sen_6_generalized: null,
  sen_6_bmc: null,
  sen_6_praxis: null,
  mod_h_vestibular: null,
  mod_h_proprioception: null,
  mod_h_tactile: null,
  mod_h_auditory: null,
  mod_h_visual: null,
  mod_h_intero: null,
  mod_1_defensiveness: null,
  mod_1_over: null,
  mod_1_under: null,
  mod_1_variable: null,
  mod_2_attention: null,
  mod_2_action: null,
  mod_2_affect: null,
  mod_2_autonomic: null,
  mod_3_physiological: null,
  mod_3_sensory: null,
  mod_3_motor: null,
  mod_3_emotional: null,
  mod_3_cognitive: null,
  mod_3_social: null,
  mod_3_prosocial: null,
  mod_4a_passive: null,
  mod_4a_co_regulation: null,
  mod_4a_approach: null,
  mod_4a_adaptive: null,
  mod_4b_active: null,
  mod_4b_self_regulation: null,
  mod_4b_avoid: null,
  mod_4b_maladaptive: null,
  exe_1_orient: null,
  exe_1_inhibition: null,
  exe_2a_working: null,
  exe_2a_shifting: null,
  exe_2b_verbal: null,
  exe_2b_spatial: null,
  exe_2b_general: null,
  exe_2b_global: null,
  exe_2b_flexibility: null,
  exe_3_inhibition: null,
  exe_3_shifting: null,
  exe_3_sequencing: null,
  exe_3_monitoring: null,
  exe_4a_future: null,
  exe_4a_spatial: null,
  exe_4a_problem: null,
  exe_4a_reflective: null,
  exe_4a_internalized: null,
  exe_4b_motivational: null,
  exe_4b_effortful: null,
  exe_4b_self_control: null,
  exe_4b_self_regulation: null,
  exe_4b_self_compassion: null,
  pos_h_vestibular: null,
  pos_h_proprioception: null,
  pos_h_tactile: null,
  pos_h_auditory: null,
  pos_h_visual: null,
  pos_h_intero: null,
  pos_1_outer: null,
  pos_1_inner: null,
  pos_2_stability: null,
  pos_2_mobility: null,
  pos_2_tonic: null,
  pos_2_phasic: null,
  pos_2_muscle: null,
  pos_3_sagittal: null,
  pos_3_frontal: null,
  pos_3_transverse: null,
  pos_3_midlines: null,
  pos_4_core: null,
  pos_4_shoulder: null,
  pos_4_pelvic: null,
  pos_4_head: null,
  pos_4_eyes: null,
  pos_4_hand: null,
  pos_4_lower: null,
  pos_4_foot: null,
  pos_5_suck: null,
  pos_5_ocular: null,
  pos_5_antigravity: null,
  pos_5_reflex: null,
  pos_5_alignment_COG: null,
  pos_5_alignment_orient: null,
  pos_5_anticipatory: null,
  pos_5_interactive: null,
  pos_6_push: null,
  pos_6_bilateral: null,
  pos_6_grasp: null,
  pos_6_strength: null,
  pos_6_effortful: null,
  soc_1_regulation: null,
  soc_1_engagement: null,
  soc_1_reciprocity: null,
  soc_1_problem: null,
  soc_1_representation: null,
  soc_1_triangular: null,
  soc_1_comparative: null,
  soc_1_reflective: null,
  soc_2_self_awareness: null,
  soc_2_joint: null,
  soc_2_social_referencing: null,
  soc_2_imitation: null,
  soc_2_inferential: null,
  soc_2_contingent: null,
  soc_2_theory: null,
  soc_2_central: null,
  soc_2_metalizing: null,
  soc_2_empathy: null,
  soc_2_social_motivators: null,
  soc_2_social_perspective: null,
  soc_2_pro_social: null,
  soc_3_affective: null,
  soc_3_emotional_contagion: null,
  soc_3_activation_low: null,
  soc_3_emotional_cascade: null,
  soc_3_activation_high: null,
  soc_3_emotional_differentiation: null,
  soc_3_emotional_association: null,
  soc_3_self_control: null,
  soc_3_self_regulation: null,
  soc_3_self_compassion: null,
  soc_4_mental: null,
  soc_4_thoughts: null,
  soc_4_attachment: null,
  soc_4_trauma: null
};

const patientSliders = (store = defaultStore, action) => {
  switch (action.type) {
    case "UPDATE_SLIDER_VALUE":
      defaultStore[Object.keys(action.slider)[0]] = Object.values(action.slider)[0]
      return defaultStore;
      
    default:
      return store;
  }
};

export default patientSliders;