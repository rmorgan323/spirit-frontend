import moment from 'moment';

const processSessionGoals = (data) => {

  let cleanObj = {
    created: [],
    session_id: [],
    executive: [],
    modulation: [],
    posture: [],
    sensory: [],
    social: [],
  }

  data.forEach((goals, index) => {
    cleanObj.created.push({date: moment(goals.created_at).format('l')});
    cleanObj.session_id.push({id: goals.session_id});
    cleanObj.executive.push({x: index, y: (goals.executive_functioning_ot_importance + goals.executive_functioning_ot_performance + goals.executive_functioning_ot_satisfaction)});
    cleanObj.modulation.push({x: index, y: (goals.modulation_ot_importance + goals.modulation_ot_performance + goals.modulation_ot_satisfaction)});
    cleanObj.posture.push({x: index, y: (goals.posture_ot_importance + goals.posture_ot_performance + goals.posture_ot_satisfaction)});
    cleanObj.sensory.push({x: index, y: (goals.sensory_discrimination_ot_importance + goals.sensory_discrimination_ot_performance + goals.sensory_discrimination_ot_satisfaction)});
    cleanObj.social.push({x: index, y: (goals.social_emotional_ot_importance + goals.social_emotional_ot_performance + goals.social_emotional_ot_satisfaction)});
  })

  return cleanObj;
}

export default processSessionGoals;