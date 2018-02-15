const loadSessionsList = async primaryConcernId => {
  try {
    const fetchedSessionsList = await fetch(
      `localhost:3000/api/v1/primary-concerns/${primaryConcernId}/sessions`
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
