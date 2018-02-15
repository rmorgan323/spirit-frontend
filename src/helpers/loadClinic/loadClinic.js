import getKeyFromLS from '../getKeyFromLS';

const loadClinic = async (id) => {
  const clinic = await fetch(`http://localhost:3000/api/v1/clinics/${id}`, {
    method: 'GET',
    headers: {
      "x-token": getKeyFromLS(),
      "Content-Type": "application/json"
    }
  });
  const jsonClinic = await clinic.json();

  return jsonClinic[0];
}

export default loadClinic;