import getKeyFromLS from '../getKeyFromLS';

const postSession = async primaryConcernId => {
  try {
    const fetchedSessionId = await fetch(
      `http://localhost:3000/api/v1/${primaryConcernId}/sessions`,
      {
        method: 'POST',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        }
      }
    );
    const jsonSessionId = await fetchedSessionId.json();

    return jsonSessionId;
  } catch (error) {
    throw new Error(
      `Error fetching creating session by primary concern id ${primaryConcernId}: ${error}`
    );
  }
};

export default postSession;
