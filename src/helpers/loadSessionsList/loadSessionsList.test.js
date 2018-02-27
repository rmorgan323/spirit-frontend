import apiRoot from '../apiRoot';
import loadSessionsList from './loadSessionsList';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('loadSessionsList tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(loadSessionsList).toBeAFunction;
  });

  it('loadSessionsList is called with the correct params', async () => {
    const expected = [
      `${apiRoot}/api/v1/primary-concerns/1/sessions`,
      {
        method: 'GET',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        }
      }
    ];

    await loadSessionsList(1);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});