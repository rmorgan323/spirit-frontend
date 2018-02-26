/*eslint-disable max-len*/

import React from 'react';
import { ViewSession, mapStateToProps } from './ViewSession';
import { shallow } from 'enzyme';
import { mockPatient } from '../../data/mockData/mockPatient';
import { mockConcern } from '../../data/mockData/mockConcern';
import { mockSession } from '../../data/mockData/mockSession';
import { mockProcess } from '../../data/mockData/mockProcess';
import { mockTherapyGoal } from '../../data/mockData/mockTherapyGoal';
import { mockTreatmentPlan } from '../../data/mockData/mockTreatmentPlan';

describe('ViewSession', () => {
  it('Should match snapshot', () => {
    const renderedApp = shallow(
      <ViewSession
        currentPatient={mockPatient}
        selectedConcern={mockConcern}
        selectedSession={mockSession}
        selectedProcess={mockProcess}
        selectedTherapyGoal={mockTherapyGoal}
        selectedTreatmentPlan={mockTreatmentPlan}
      />
    );

    expect(renderedApp).toMatchSnapshot();
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull currentPatient, selectedConcern, selectedSession, selectedProcess, selectedTherapyGoal, selectedTreatmentPlan, and comparisonData from store', () => {
    const mockStore = {
      currentPatient: mockPatient,
      selectedConcern: mockConcern,
      selectedSession: mockSession,
      selectedProcess: mockProcess,
      selectedTherapyGoal: mockTherapyGoal,
      selectedTreatmentPlan: mockTreatmentPlan
    };
    const result = mapStateToProps(mockStore);

    expect(result.currentPatient).toEqual(mockStore.currentPatient);
    expect(result.selectedConcern).toEqual(mockStore.selectedConcern);
    expect(result.selectedSession).toEqual(mockStore.selectedSession);
    expect(result.selectedProcess).toEqual(mockStore.selectedProcess);
    expect(result.selectedTherapyGoal).toEqual(mockStore.selectedTherapyGoal);
    expect(result.selectedTreatmentPlan).toEqual(
      mockStore.selectedTreatmentPlan
    );
  });
});
