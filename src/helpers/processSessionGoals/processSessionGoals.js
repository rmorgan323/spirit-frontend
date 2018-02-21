import moment from 'moment';

const processSessionGoals = (data) => {

  data = data.sort((a, b) => a.id - b.id)

  let cleanObj = [
    { created: [] },
    { session_id: [] },
    { executive: [] },
    { modulation: [] },
    { posture: [] },
    { sensory: [] },
    { social: [] }
  ]

  data.forEach((goals, index) => {
    cleanObj[0].created.unshift({date: moment(goals.created_at).format('l')});
    cleanObj[1].session_id.unshift({id: goals.session_id});
    cleanObj[2].executive.unshift({x: index, y: (goals.executive_functioning_ot_importance + goals.executive_functioning_ot_performance + goals.executive_functioning_ot_satisfaction)});
    cleanObj[3].modulation.unshift({x: index, y: (goals.modulation_ot_importance + goals.modulation_ot_performance + goals.modulation_ot_satisfaction)});
    cleanObj[4].posture.unshift({x: index, y: (goals.posture_ot_importance + goals.posture_ot_performance + goals.posture_ot_satisfaction)});
    cleanObj[5].sensory.unshift({x: index, y: (goals.sensory_discrimination_ot_importance + goals.sensory_discrimination_ot_performance + goals.sensory_discrimination_ot_satisfaction)});
    cleanObj[6].social.unshift({x: index, y: (goals.social_emotional_ot_importance + goals.social_emotional_ot_performance + goals.social_emotional_ot_satisfaction)});
  })

  return cleanObj;
}

export default processSessionGoals;