import React from 'react';
import {
  BodyDiagram,
  mapStateToProps,
  mapDispatchToProps
} from './BodyDiagram';
import { shallow } from 'enzyme';
import { mockProcess } from '../../data/mockData/mockProcess';
import { mockStoredThreadConnections } from '../../data/mockData/mockStoredThreadConnections';

describe('BodyDiagram tests', () => {
  let selectedProcess;
  let updateProcessPerformanceComponent;
  let storedThreadConnections;
  let renderedBodyDiagram;

  beforeEach(() => {
    selectedProcess = mockProcess;
    updateProcessPerformanceComponent = jest.fn();
    storedThreadConnections = mockStoredThreadConnections;

    renderedBodyDiagram = shallow(
      <BodyDiagram
        selectedProcess={selectedProcess}
        updateProcessPerformanceComponent={updateProcessPerformanceComponent}
        storedThreadConnections={storedThreadConnections}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedBodyDiagram).toBeDefined;
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull selectedProcess from store', () => {
    const mockStore = { mockProcess };
    const result = mapStateToProps(mockStore);

    expect(result.selectedProcess).toEqual(mockStore.selectedProcess);
  });

  it('Should pull storedThreadConnections from store', () => {
    const mockStore = { mockStoredThreadConnections };
    const result = mapStateToProps(mockStore);

    expect(result.storedThreadConnections).toEqual(mockStore.storedThreadConnections);
  });
});

describe('mapDispatchToProps tests', () => {});
