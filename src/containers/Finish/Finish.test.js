import React from 'react';
import { Finish, mapStateToProps, mapDispatchToProps } from './Finish';
import { shallow } from 'enzyme';
import { mockSession } from '../../data/mockData/mockSession';
import { mockConcern } from '../../data/mockData/mockConcern';

describe('Finish tests', () => {
  let selectedSession;
  let selectedConcern;
  let updateSession;
  let renderedFinish;

  beforeEach(() => {
    selectedSession = mockSession;
    selectedConcern = mockConcern;
    updateSession = jest.fn();

    renderedFinish = shallow(
      <Finish
        selectedSession={selectedSession}
        selectedConcern={selectedConcern}
        updateSession={updateSession}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedFinish).toMatchSnapshot();
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull selectedSession from store', () => {
    const mockStore = { mockSession };
    const result = mapStateToProps(mockStore);

    expect(result.selectedSession).toEqual(mockStore.selectedSession);
  });

  it('Should pull selectedConcern from store', () => {
    const mockStore = { mockConcern };
    const result = mapStateToProps(mockStore);

    expect(result.selectedConcern).toEqual(mockStore.selectedConcern);
  });
});

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when updateSession is called', () => {
    const mockDispatch = jest.fn();
    const mockParameters = [5, { completed: true }];
    const result = mapDispatchToProps(mockDispatch);

    result.updateSession(...mockParameters);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
