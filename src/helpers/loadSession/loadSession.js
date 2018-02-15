const loadSession = async sessionId => {
  try {
    const fetchedSession = fetch(
      `http://localhost:3000/api/v1/sessions/${sessionId}`
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
