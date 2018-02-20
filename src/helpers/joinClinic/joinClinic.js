import getKeyFromLS from '../getKeyFromLS';

const joinClinic = async (passcode, userId) => {
  const clinicObject = await fetch(`http://localhost:3000/api/v1/users/${userId}/join`, {
    method: 'PUT',
    headers: {
      "x-token": getKeyFromLS(),
      "Content-Type": "application/json"
    },
    body: JSON.stringify(passcode)
  });
  const jsonClinicObject = await clinicObject.json();

  return jsonClinicObject;
}

export default joinClinic;