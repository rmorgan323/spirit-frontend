import getKeyFromLS from '../getKeyFromLS';

const loadPatientList = async (id) => {
  const patientList = await fetch(`http://localhost:3000/api/v1/users/${id}/patients`, {
    method: 'GET',
    headers: {
      "x-token": getKeyFromLS(),
      "Content-Type": "application/json"
    }
  });
  const jsonPatientList = await patientList.json();

  return jsonPatientList;
}

export default loadPatientList;