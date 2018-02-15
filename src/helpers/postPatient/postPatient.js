import getKeyFromLS from '../getKeyFromLS';

const postPatient = async (absName, userId) => {
  const abstractedName = await fetch(`http://localhost:3000/api/v1/users/${userId}/patients`, {
    method: 'POST',
    headers: {
      "x-token": getKeyFromLS(),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      abstracted_name: absName
    })
  });
  const jsonAbstractedName = await abstractedName.json();

  return jsonAbstractedName[0];
}

export default postPatient;