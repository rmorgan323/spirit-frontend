import getKeyFromLS from '../getKeyFromLS';

const loadProcessById = async processId => {
  try {
    const fetchedProcess = fetch(
      `http://localhost:3000/api/v1/processes/${processId}`
    );
    const jsonProcess = fetchedProcess.json();

    return jsonProcess;
  } catch (error) {
    throw new Error(
      `Error fetching process by id ${primaryConcernId}: ${error}`
    );
  }
};

export default loadProcessById;
