let defaultStore = {
  sen_h_vestibular: 0,
  sen_h_proprioception: 0,
  sen_h_tactile: 0,
  sen_h_auditory: 0,
  sen_h_visual: 0,
  sen_h_intero: 0,
  sen_1_ability: 0,
  sen_1_match: 0,
  sen_1_classification: 0,
  sen_1_spatial: 0,
  sen_1_figure: 0,
  sen_1_inferences: 0,
  sen_2_initiation: 0,
  sen_2_imitation: 0,
  sen_2_affordance: 0,
  sen_2_generativity: 0,
  sen_3_sequencing: 0,
  sen_3_gestalt: 0,
  sen_3_selection: 0,
  sen_3_expansion: 0,
  sen_3_modification: 0,
  sen_4_timing: 0,
  sen_4_force: 0,
  sen_4_spatial: 0,
  sen_4_temporal: 0,
  sen_4_control: 0,
  sen_4_monitoring: 0,
  sen_5_oral: 0,
  sen_5_ocular: 0,
  sen_5_postural: 0,
  sen_5_limb: 0,
  sen_5_gross: 0,
  sen_5_fine: 0,
  sen_5_tool: 0,
  sen_5_projected: 0,
  sen_6_somatodyspraxia: 0,
  sen_6_visual: 0,
  sen_6_generalized: 0,
  sen_6_bmc: 0,
  sen_6_praxis: 0
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