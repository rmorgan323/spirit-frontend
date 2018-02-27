/*eslint-disable camelcase*/

import React from 'react';
import { YesNo, mapStateToProps, mapDispatchToProps } from './YesNo';
import { shallow } from 'enzyme';
import { mockProcess } from '../../data/mockData/mockProcess';
import { mockStoredThreadConnections } from '../../data/mockData/mockStoredThreadConnections';

describe('YesNo tests', () => {
  let selectedProcess;
  let databaseName;
  let updateProcessPerformanceComponent;
  let question;
  let storedThreadConnections;
  let renderedYesNo;

  beforeEach(() => {
    selectedProcess = mockProcess;
    databaseName = 'pos_1_inner';
    updateProcessPerformanceComponent = jest.fn();
    question = 'Inner?';
    storedThreadConnections = mockStoredThreadConnections;

    renderedYesNo = shallow(
      <YesNo
        selectedProcess={selectedProcess}
        databaseName={databaseName}
        updateProcessPerformanceComponent={updateProcessPerformanceComponent}
        question={question}
        storedThreadConnections={storedThreadConnections}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedYesNo).toMatchSnapshot();
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull selectedProcess and storedThreadConnections from store', () => {
    const selectedProcess = mockProcess;
    const storedThreadConnections = mockStoredThreadConnections;
    const mockStore = { selectedProcess, storedThreadConnections };
    const result = mapStateToProps(mockStore);

    expect(result.selectedProcess).toEqual(mockStore.selectedProcess);
    expect(result.storedThreadConnections).toEqual(
      mockStore.storedThreadConnections
    );
  });
});

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when updateProcessPerformanceComponent is called', () => {
    const mockDispatch = jest.fn();
    const mockParameters = [1, { pos_1_inner: true }];
    const result = mapDispatchToProps(mockDispatch);

    result.updateProcessPerformanceComponent(...mockParameters);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
