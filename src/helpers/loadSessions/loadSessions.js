const loadSessions = async primaryConcernId => {
  const fetchedSessions = await fetch(`localhost:3000/api/v1/primary-concerns/${primaryConcernId}/sessions`);
  const jsonSessions = await fetchedSessions.json();

  return jsonSessions;
}

export default loadSessions;