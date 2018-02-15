const loadSessions = async primaryConcernId => {
  try {
    const fetchedSessions = await fetch(
      `localhost:3000/api/v1/primary-concerns/${primaryConcernId}/sessions`
    );
    const jsonSessions = await fetchedSessions.json();

    return jsonSessions;
  } catch (error) {
    throw new Error(
      `Error fetching sessions by primary concern id ${primaryConcernId}: ${error}`
    );
  }
};

export default loadSessions;
