let defaultStore = {
  sen_h_vestibular: '',
  sen_h_proprioception: '',
  sen_h_tactile: '',
  sen_h_auditory: '',
  sen_h_visual: '',
  sen_h_intero: '',
  sen_1_ability: '',
  sen_1_match: '',
  sen_1_classification: '',
  sen_1_spatial: '',
  sen_1_figure: '',
  sen_1_inferences: '',
  sen_2_initiation: '',
  sen_2_imitation: '',
  sen_2_affordance: '',
  sen_2_generativity: '',
  sen_3_sequencing: '',
  sen_3_sequencing_gestalt: '',
  sen_3_schema_selection: '',
  sen_3_schema_expansion: '',
  sen_3_modification: '',
  sen_4_timing: '',
  sen_4_timing_force: '',
  sen_4_spatial: '',
  sen_4_temporal: '',
  sen_4_control: '',
  sen_4_monitoring: '',
  sen_5_oral: '',
  sen_5_ocular: '',
  sen_5_postural: '',
  sen_5_limb: '',
  sen_5_gross: '',
  sen_5_fine: '',
  sen_5_tool: '',
  sen_5_projected: '',
  sen_6_somatodyspraxia: '',
  sen_6_visual: '',
  sen_6_generalized: '',
  sen_6_bmc: '',
  sen_6_praxis: ''
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