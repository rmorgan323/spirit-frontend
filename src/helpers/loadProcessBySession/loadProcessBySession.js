import getKeyFromLS from '../getKeyFromLS';

const loadProcessBySession = async sessionId => {
  try {
    const fetchedProcess = await fetch(
      `http://localhost:3000/api/v1/sessions/${sessionId}/processes`,
      {
        method: 'GET',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        }
      }
    );
    const jsonProcess = await fetchedProcess.json();

    return jsonProcess;
  } catch (error) {
    throw new Error(
      `Error fetching process by session id ${primaryConcernId}: ${error}`
    );
  }
};

export default loadProcessBySession;
