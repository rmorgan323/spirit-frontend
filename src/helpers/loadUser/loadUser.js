import getKeyFromLS from '../getKeyFromLS';

const loadUser = async () => {
  const user = await fetch('http://localhost:3000/api/v1/users/', {
    method: 'GET',
    headers: {
      "x-token": getKeyFromLS(),
      "Content-Type": "application/json"
    }
  });
  console.log(user)
  const jsonUser = await user.json();
  console.log(jsonUser)
  return jsonUser[0];
}

export default loadUser;