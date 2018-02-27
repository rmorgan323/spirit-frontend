import React from 'react';
import {
  UserDashboard,
  mapStateToProps,
  mapDispatchToProps
} from './UserDashboard';
import { shallow } from 'enzyme';
import { mockUserData } from '../../data/mockData/mockUserData';

describe('UserDashboard tests', () => {
  let savePatient;
  let user;
  let wipeStoreFromUserDashboard;
  let renderedUserDashboard;

  beforeEach(() => {
    savePatient = jest.fn();
    user = mockUserData;
    wipeStoreFromUserDashboard = jest.fn();

    renderedUserDashboard = shallow(
      <UserDashboard
        savePatient={savePatient}
        user={user}
        wipeStoreFromUserDashboard={wipeStoreFromUserDashboard}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedUserDashboard).toMatchSnapshot();
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull a user from store', () => {
    const user = mockUserData;
    const mockStore = { user };
    const result = mapStateToProps(mockStore);

    expect(result.user).toEqual(mockStore.user);
  });
});

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when savePatient is called', () => {
    const mockDispatch = jest.fn();
    const mockParameters = [
      'A',
      'B',
      {
        name: 'Hugh',
        clinic: 'Developmental FX'
      },
      'DFX'
    ];

    const result = mapDispatchToProps(mockDispatch);

    result.savePatient(...mockParameters);
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('Should call dispatch when wipeStoreFromUserDashboard is called', () => {
    const mockDispatch = jest.fn();
    const result = mapDispatchToProps(mockDispatch);

    result.wipeStoreFromUserDashboard();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
