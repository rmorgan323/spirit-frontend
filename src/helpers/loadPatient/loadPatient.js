import getKeyFromLS from '../getKeyFromLS';

const loadPatient = async (id) => {
  const patient = await fetch(`http://localhost:3000/api/v1/patients/${id}`, {
    method: 'GET',
    headers: {
      "x-token": getKeyFromLS(),
      "Content-Type": "application/json"
    }
  });
  const jsonPatient = await patient.json();

  return jsonPatient[0];
}

export default loadPatient;