import getKeyFromLS from '../getKeyFromLS';

const loadSessionsList = async primaryConcernId => {
  try {
    const fetchedSessionsList = await fetch(
      `http://localhost:3000/api/v1/primary-concerns/${primaryConcernId}/sessions`,
      {
        method: 'GET',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        }
      }
    );
    const jsonSessionsList = await fetchedSessionsList.json();

    return jsonSessions;
  } catch (error) {
    throw new Error(
      `Error fetching sessions by primary concern id ${primaryConcernId}: ${error}`
    );
  }
};

export default loadSessionsList;
