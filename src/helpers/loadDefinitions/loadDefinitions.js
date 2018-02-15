import getKeyFromLS from '../getKeyFromLS';

const loadDefinitions = async () => {
  const definitions = await fetch('http://localhost:3000/api/v1/terms/all', {
    method: 'GET',
    headers: {
      "x-token": getKeyFromLS(),
      "Content-Type": "application/json"
    }
  });
  const jsonDefinitions = await definitions.json();

  return jsonDefinitions;
}

export default loadDefinitions;