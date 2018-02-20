import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const loadPatientList = async id => {
  try {
    const patientList = await fetch(
      `http://localhost:3000/api/v1/users/${id}/patients`,
      {
        method: 'GET',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        }
      }
    );
    const jsonPatientList = await patientList.json();

    return jsonPatientList;
  } catch (error) {
    throw new Error(`Error fetching patients by user id ${id}: ${error}`);
  }
};

export default loadPatientList;
