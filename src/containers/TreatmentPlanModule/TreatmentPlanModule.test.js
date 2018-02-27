import React from 'react';
import {
  TreatmentPlanModule,
  mapStateToProps,
  mapDispatchToProps
} from './TreatmentPlanModule';
import { shallow } from 'enzyme';
import { mockTreatmentPlan } from '../../data/mockData/mockTreatmentPlan';

describe('TreatmentPlanModule tests', () => {
  let selectedTreatmentPlan;
  let getTreatmentPlan;
  let type;
  let renderedTreatmentPlanModule;

  beforeEach(() => {
    selectedTreatmentPlan = mockTreatmentPlan;
    getTreatmentPlan = jest.fn();
    type = 'Sensory';

    renderedTreatmentPlanModule = shallow(
      <TreatmentPlanModule
        selectedTreatmentPlan={selectedTreatmentPlan}
        type={type}
        getTreatmentPlan={getTreatmentPlan}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedTreatmentPlanModule).toMatchSnapshot();
  });

  it('Should change a targeted areas value in state and set changed to true', () => {

  });

  it('Should not try to save any data if changed is false', () => {

  });

  it('Should set changed to false after sending send if changed is true', () => {

  });
});

describe('mapStateToProps tests', () => {
  it('Should pull a selectedTreatmentPlan from store', () => {
    const selectedTreatmentPlan = mockTreatmentPlan;
    const mockStore = { selectedTreatmentPlan };
    const result = mapStateToProps(mockStore);

    expect(result.selectedTreatmentPlan).toEqual(
      mockStore.selectedTreatmentPlan
    );
  });
});

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when getTreatmentPlan is called', () => {
    const mockDispatch = jest.fn();
    const mockParameters = [
      5,
      {
        title: 'Sensory',
        note: 'Sensory treatment plan notes'
      }
    ];
    const result = mapDispatchToProps(mockDispatch);

    result.getTreatmentPlan(...mockParameters);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
