import React from 'react';
import {
  PatientDashboard,
  mapStateToProps,
  mapDispatchToProps
} from './PatientDashboard';
import { shallow } from 'enzyme';
import { mockPatient } from '../../data/mockData/mockPatient';
import { mockConcerns } from '../../data/mockData/mockConcern';

describe('PatientDashboard tests', () => {
  let addConcern;
  let currentPatient;
  let wipeStoreFromPatientDashboard;
  let renderedPatientDashboard;

  beforeEach(() => {
    addConcern = jest.fn();
    currentPatient = mockPatient;
    wipeStoreFromPatientDashboard = jest.fn();

    renderedPatientDashboard = shallow(
      <PatientDashboard
        addConcern={addConcern}
        currentPatient={currentPatient}
        wipeStoreFromPatientDashboard={wipeStoreFromPatientDashboard}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedPatientDashboard).toMatchSnapshot();
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull patientConcerns and currentPatient from store', () => {
    const patientConcerns = [mockConcerns];
    const currentPatient = mockPatient;
    const mockStore = { patientConcerns, currentPatient };
    const result = mapStateToProps(mockStore);

    expect(result.patientConcerns).toEqual(mockStore.patientConcerns);
    expect(result.currentPatient).toEqual(mockStore.currentPatient);
  });
});

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when addConcern is called', () => {
    const mockDispatch = jest.fn();
    const mockParameters = [5, mockConcerns];
    const result = mapDispatchToProps(mockDispatch);

    result.addConcern(...mockParameters);
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('Should call dispatch when wipeStoreFromPatientDashboard is called', () => {
    const mockDispatch = jest.fn();
    const result = mapDispatchToProps(mockDispatch);

    result.addConcern();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
