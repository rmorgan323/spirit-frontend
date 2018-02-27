import React from 'react';
import { Sessions, mapStateToProps, mapDispatchToProps } from './Sessions';
import { shallow } from 'enzyme';
import { mockConcern } from '../../data/mockData/mockConcern';
import { mockSession } from '../../data/mockData/mockSession';
import { mockComparisonData } from '../../data/mockData/mockComparisonData';

describe('Sessions tests', () => {
  let selectedConcern;
  let sessions;
  let createSession;
  let getSession;
  let compareSessionData;
  let comparisonData;
  let wipeStoreFromSessions;
  let renderedSessions;

  beforeEach(() => {
    selectedConcern = mockConcern;
    sessions = [mockSession];
    createSession = jest.fn();
    getSession = jest.fn();
    compareSessionData = jest.fn();
    comparisonData = mockComparisonData;
    wipeStoreFromSessions = jest.fn();

    renderedSessions = shallow(
      <Sessions 
        selectedConcern={selectedConcern}
        sessions={sessions} 
        createSession={createSession}
        getSession={getSession}
        compareSessionData={compareSessionData}
        comparisonData={comparisonData}
        wipeStoreFromSessions={wipeStoreFromSessions}
      />)
  })

  it('Should match the snapshot', () => {
    expect(renderedSessions).toMatchSnapshot();
  });
});

describe('mapStateToPropsTests', () => {
  it('Should pull comparisonData, selectedConcern, and sessions from store', () => {
    const comparisonData = mockComparisonData;
    const selectedConcern = mockConcern;
    const sessions = [mockSession];
    const mockStore = { comparisonData, selectedConcern, sessions };
    const result = mapStateToProps(mockStore);

    expect(result.comparisonData).toEqual(mockStore.comparisonData);
    expect(result.selectedConcern).toEqual(mockStore.selectedConcern);
    expect(result.sessions).toEqual(mockStore.sessions);
  });
});

describe('mapDispatchToProps', () => {

});
