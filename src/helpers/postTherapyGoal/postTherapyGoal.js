import getKeyFromLS from '../getKeyFromLS';

const postTherapyGoal = async sessionId => {
  try {
    const fetchedTherapyGoalId = await fetch(
      `http://localhost:3000/api/v1/sessions/${sessionId}/therapy-goals`,
      {
        method: 'POST',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        }
      }
    );
    const jsonTherapyGoalId = await fetchedTherapyGoalId.json();

    return jsonTherapyGoalId;
  } catch (error) {
    throw new Error(
      `Error creating therapy goal by session id ${sessionId}: ${error}`
    );
  }
};

export default postTherapyGoal;
