export const landing = {
  descriptor: `A clinical reasoning model for ensuring best practice in pediatric occupational therapy.`
};

export const userDashboard = {
  otDash: name => `${name} - OT Dashboard`,
  welcome: `Welcome to SpIRiT, `,
  seeClinic: `SEE CLINIC INFO`,
  addJoinClinic: `ADD/JOIN A CLINIC`,
  newPatients: `New Patients`,
  submit: `SUBMIT`,
  addNewPatientDetails: `Add NEW patient with 2 patient initials`,
  currentPatients: `Current Patients`,
  welcomeDirections1: `To start tracking your patients through SpIRiT, add a new clinic or join an existing one below.`,
  welcomeDirections2: `Joining an existing clinic will require a passcode which you can obtain from your your administrator.`,
  patientDirections1: `Each patient name is a combination of your clinic abbreviation, the patient's first and last initial, and a unique number identifier (ie CLI + AB + 10).`,
  patientDirections2: `Please keep this abstracted name in your personal patient records for future reference.`
};

export const createClinic = {
  addDirections1: `To add a new clinic, you must provide a clinic name and three letter abbreviation. This abbreviation will be used to abstract your patient's real name when adding them to SpIRiT©.`,
  addDirections2: `After submission, you will be provided with a passcode. This passcode will be used by other members in order to join your clinic.`,
  clinicNameError: `Please enter a clinic name and abbreviation`,
  clinicAbbreviationError: `Clinic abbreviation must be three characters long`,
  addClinicSuccess: passcode =>
    `Clinic successfully added! Your clinic passcode is ${passcode}.`,
  currentClinic: `Your Current Clinic`,
  memberOfClinic: `You are a member of: `,
  clinicAbbreviation: `Clinic Abbreviation: `,
  clinicPasscode: `Clinic Passcode: `,
  newClinicPlaceholder: `New Clinic Name`,
  clinicAbbreviationPlaceholder: `Choose a 3-letter abbreviation for your clinic`,
  submitClinic: `SUBMIT`,
  joinClinic: `JOIN EXISTING CLINIC`
};

export const joinClinic = {
  directions1: `To join an existing clinic on SpIRiT©, you must use a clinic's eight digit passcode. If you do not know your clinic's passcode, please contact your SpIRiT© administrator.`,
  directions2: `If your clinic has not been registered, click 'CREATE NEW CLINIC' below to learn how you can add your clinic and start using SpIRiT©.`
};

export const modulation = {
  header: {
    title: `Modulation Capacities: Sensory Modulation to Self-Regulation`,
    terms: [
      'Vestibular',
      'Proprioception',
      'Tactile',
      'Auditory',
      'Visual',
      'Intero'
    ],
    db: [
      'mod_h_vestibular',
      'mod_h_proprioception',
      'mod_h_tactile',
      'mod_h_auditory',
      'mod_h_visual',
      'mod_h_intero'
    ]
  },
  columns: {
    column1: {
      title: 'Capacities',
      terms: ['Defensiveness', 'Over', 'Under', 'Variable'],
      db: [
        'mod_1_defensiveness',
        'mod_1_over',
        'mod_1_under',
        'mod_1_variable'
      ],
      reminderPlacement: [null, '*', '*', '*', '*'],
      reminder: '* If selected, remember to make a hypothesized arousal chart'
    },
    column2: {
      title: 'Capacities',
      terms: ['Attention', 'Action', 'Affect', 'Autonomic', 'Arousability'],
      db: [
        'mod_2_attention',
        'mod_2_action',
        'mod_2_affect',
        'mod_2_autonomic',
        'mod_2_arousability'
      ],
      reminderPlacement: [null, null, null, null, '*']
    },
    column3: {
      title: 'Self-Regulation',
      terms: [
        'Physiological',
        'Sensory',
        'Motor',
        'Emotional',
        'Cognitive',
        'Social',
        'Prosocial'
      ],
      db: [
        'mod_3_physiological',
        'mod_3_sensory',
        'mod_3_motor',
        'mod_3_emotional',
        'mod_3_cognitive',
        'mod_3_social',
        'mod_3_prosocial'
      ]
    },
    column4A: {
      title: 'Regulatory Capacities',
      terms: ['Passive', 'Co-Regulation', 'Approach', 'Adaptive'],
      db: [
        'mod_4a_passive',
        'mod_4a_co_regulation',
        'mod_4a_approach',
        'mod_4a_adaptive'
      ]
    },
    column4B: {
      title: 'Regulatory Capacities',
      terms: ['Active', 'Self-Regulation', 'Avoid', 'Maladaptive'],
      db: [
        'mod_4b_active',
        'mod_4b_self_regulation',
        'mod_4b_avoid',
        'mod_4b_maladaptive'
      ]
    }
  }
};

export const postural = {
  header: {
    title: 'Postural/Core Movement Capacities',
    terms: [
      'Vestibular',
      'Proprioception',
      'Tactile',
      'Auditory',
      'Visual',
      'Intero'
    ],
    db: [
      'pos_h_vestibular',
      'pos_h_proprioception',
      'pos_h_tactile',
      'pos_h_auditory',
      'pos_h_visual',
      'pos_h_intero'
    ]
  },
  columns: {
    column1: {
      type: 'YesNo',
      title: 'Core Development',
      terms: ['Outer Core', 'Inner Core'],
      db: ['pos_1_outer', 'pos_1_inner']
    },
    column2: {
      title: 'Quality of Movement',
      terms: ['Stability', 'Mobility', 'Tonic', 'Phasic', 'Muscle Tone'],
      db: [
        'pos_2_stability',
        'pos_2_mobility',
        'pos_2_tonic',
        'pos_2_phasic',
        'pos_2_muscle'
      ]
    },
    column3: {
      title: 'Planes of Movement',
      terms: [
        'Sagittal: Flex/Ext',
        'Frontal: Lateral',
        'Transverse: Rotational',
        'Midlines of each plane'
      ],
      db: [
        'pos_3_sagittal',
        'pos_3_frontal',
        'pos_3_transverse',
        'pos_3_midlines'
      ]
    },
    column4: {
      type: 'BodyDiagram'
    },
    column5: {
      title: 'Automatic Actions',
      terms: [
        'Suck/Swallow/Breath',
        'Ocular within Postural Control',
        'Antigravity Control',
        'Reflex Integration/Sensory Motor Patterns',
        'Alignment/COG over BOS',
        'Alignment/Orient to Stimulus or Goal',
        'Anticipatory Control',
        'Interactive Oscillator and Imitative Action'
      ],
      db: [
        'pos_5_suck',
        'pos_5_ocular',
        'pos_5_antigravity',
        'pos_5_reflex',
        'pos_5_alignment_COG',
        'pos_5_alignment_orient',
        'pos_5_anticipatory',
        'pos_5_interactive'
      ]
    },
    column6: {
      title: 'Voluntary Actions',
      terms: [
        'Push/Pull/Reach',
        'Bilateral Symmetrical/Bilateral Asymmetrical/Unilateral',
        'Grasp/Release',
        'Strength/Endurance/Flexibility/BMI',
        'Effortful Control'
      ],
      db: [
        'pos_6_push',
        'pos_6_bilateral',
        'pos_6_grasp',
        'pos_6_strength',
        'pos_6_effortful'
      ]
    }
  }
};

export const executive = {
  header: { title: `Executive Functioning Capacities` },
  columns: {
    column1: {
      terms: ['Orient EYES-EARS-SELF to GOAL', 'Inhibition'],
      db: ['exe_1_orient', 'exe_1_inhibition']
    },
    column2A: {
      terms: ['Working Memory', 'Shifting'],
      db: ['exe_2a_working', 'exe_2a_shifting']
    },
    column2B: {
      terms: ['Verbal', 'Spatial', 'General', 'Global/Local', 'Flexibility'],
      db: [
        'exe_2b_verbal',
        'exe_2b_spatial',
        'exe_2b_general',
        'exe_2b_global',
        'exe_2b_flexibility'
      ]
    },
    column3: {
      terms: ['Initiation', 'Planning', 'Sequencing', 'Monitoring'],
      db: [
        'exe_3_initiation',
        'exe_3_planning',
        'exe_3_sequencing',
        'exe_3_monitoring'
      ]
    },
    column4A: {
      terms: [
        'Future-Oriented/Goal-Directed',
        'Spatial/Temporal Organization',
        'Problem Solving',
        'Reflective Thinking',
        'Internalized Language'
      ],
      db: [
        'exe_4a_future',
        'exe_4a_spatial',
        'exe_4a_problem',
        'exe_4a_reflective',
        'exe_4a_internalized'
      ]
    },
    column4B: {
      terms: [
        'Motivational Bias',
        'Effortful Control',
        'Self-Control',
        'Self-Regulation',
        'Self-Compassion'
      ],
      db: [
        'exe_4b_motivational',
        'exe_4b_effortful',
        'exe_4b_self_control',
        'exe_4b_self_regulation',
        'exe_4b_self_compassion'
      ]
    }
  }
};

export const bodyDiagram = {
  title: `Body Parts`,
  coreAbdominal: `1. Core Abdominal Control`,
  shoulder: `2. Shoulder Girdle Core`,
  pelvic: `3. Pelvic Trunk/LE Core`,
  head: `4. Head/Neck to Trunk Core`,
  eyes: `5. Eyes in Head Core`,
  hand: `6. Hand Control`,
  lower: `7. Lower Extremity`,
  foot: `8. Foot/Base of Support Core`
};

export const finish = {
  recommend:
    'We recommend reviewing your session results before writing plans and goals',
  stepsi: 'S.T.E.P.S.I. ©',
  copm: 'Modified from the C.O.P.M.'
};
