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
    expect(renderedBodyDiagram).toMatchSnapshot();
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull selectedProcess from store', () => {
    const selectedProcess = mockProcess;
    const mockStore = { selectedProcess };
    const result = mapStateToProps(mockStore);

    expect(result.selectedProcess).toEqual(mockStore.selectedProcess);
  });

  it('Should pull storedThreadConnections from store', () => {
    const storedThreadConnections = mockStoredThreadConnections
    const mockStore = { storedThreadConnections };
    const result = mapStateToProps(mockStore);

    expect(result.storedThreadConnections).toEqual(
      mockStore.storedThreadConnections
    );
  });
});

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when updateProcessPerformanceComponent is call', () => {
    const mockDispatch = jest.fn();
    const mockParameters = [{ pos_4_body: true }, 5];
    const result = mapDispatchToProps(mockDispatch);

    result.updateProcessPerformanceComponent(...mockParameters);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
