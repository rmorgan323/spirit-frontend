import logoutUser from './logoutUser';
import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

global.localStorage = {
  getItem: key => global.localStorage[key],
  removeItem: key => delete localStorage[key],
  'spirit-token-987': 'abcdefghijk987654321'
};

describe('logoutUser tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      status: 200
    })
  );

  it('Should be a function', () => {
    expect(logoutUser).toBeAFunction;
  });

  it('Should be called with the correct parameters', async () => {
    const expected = [
      `https://spirit-dev.e1.loginrocket.com/v1/logout`,
      {
        method: 'POST',
        body: JSON.stringify({
          token: getKeyFromLS()
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ];

    await logoutUser();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});
