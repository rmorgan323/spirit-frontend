import getKeyFromLS from '../getKeyFromLS';

const loadPatientConcernById = async concernId => {
  try {
    const fetchedConcern = await fetch(
      `localhost:3000/api/v1/primary-concerns/${concernId}`
    );
    const jsonConcern = await fetchedConcern.json();

    return jsonConcern;
  } catch (error) {
    throw new Error(`Error fetch primary concern by id ${concernId}: ${error}`);
  }
};

export default loadPatientConcernById;
