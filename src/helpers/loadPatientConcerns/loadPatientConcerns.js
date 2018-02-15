import getKeyFromLS from '../getKeyFromLS';

const loadPatientConcerns = async (id) => {
  const concerns = await fetch(`http://localhost:3000/api/v1/patients/${id}/primary-concerns`, {
    method: 'GET',
    headers: {
      "x-token": getKeyFromLS(),
      "Content-Type": "application/json"
    }
  });
  const jsonConcerns = await concerns.json();

  return jsonConcerns;
}

export default loadPatientConcerns;