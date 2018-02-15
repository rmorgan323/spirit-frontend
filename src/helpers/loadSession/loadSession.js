import getKeyFromLS from '../getKeyFromLS';

const loadSession = async sessionId => {
  try {
    const fetchedSession = fetch(
      `http://localhost:3000/api/v1/sessions/${sessionId}`,
      {
        method: 'GET',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        }
      }
    );
    const jsonSession = fetchedSession.json();

    return jsonSession;
  } catch (error) {
    throw new Error(
      `Error fetching sessions by session id ${sessionId}: ${error}`
    );
  }
};

export default loadSession;
