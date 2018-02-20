import getKeyFromLS from '../getKeyFromLS';

const loadUser = async () => {
  try {
    const user = await fetch('http://localhost:3000/api/v1/users/', {
      method: 'GET',
      headers: {
        'x-token': getKeyFromLS(),
        'Content-Type': 'application/json'
      }
    });
    const jsonUser = await user.json();

    return jsonUser[0];
  } catch (error) {
    throw new Error(`Error fetching users: ${error}`);
  }
};

export default loadUser;
