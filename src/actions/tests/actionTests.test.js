import * as actions from '../index';
import mockUserData from '../../data/mockData/mockUserData';
import mockPatient from '../../data/mockData/mockPatient';
import mockConcernData from '../../data/mockData/mockConcernData';
import mockConcern from '../../data/mockData/mockConcern';
import mockSession from '../../data/mockData/mockSession';

describe('Actions tests', () => {
  it('userToStore should have a type of USER_TO_STORE', () => {
    const user = mockUserData;
    const expected = {
      type: 'USER_TO_STORE',
      user
    };

    expect(actions.userToStore(user)).toEqual(expected);
  });

  it('currentPatientToStore should have a type of CURRENT_PATIENT_TO_STORE', () => {
    const patient = mockPatient;
    const expected = {
      type: 'CURRENT_PATIENT_TO_STORE',
      patient
    };

    expect(actions.currentPatientToStore(patient)).toEqual(expected);
  });

  it('concernArrayToStore should have a type of CONCERN_ARRAY_TO_STORE', () => {
    const concerns = mockConcernData;
    const expected = {
      type: 'CONCERN_ARRAY_TO_STORE',
      concerns
    };

    expect(actions.concernArrayToStore(concerns)).toEqual(expected);
  });

  it('selectedConcernToStore should have a type of SELECTED_CONCERN_TO_STORE', () => {
    const selectedConcern = mockConcern;
    const expected = {
      type: 'SELECTED_CONCERN_TO_STORE',
      selectedConcern
    };

    expect(actions.selectedConcernToStore(selectedConcern)).toEqual(expected);
  });

  it('sessionsArrayToStore should have a type of SESSIONS_TO_STORE', () => {
    const sessions = [mockSession];
    const expected = {
      type: 'SESSIONS_TO_STORE',
      sessions
    };

    expect(actions.sessionsArrayToStore(sessions)).toEqual(expected);
  });

  it('updateSessions Array should have a type of UPDATE_SESSIONS_ARRAY', () => {

  });

  it('updateSelectedSession should have a type of UPDATE_SELECTED_SESSION', () => {

  });

  it('selectedSessionToStore should have a type of SELECTED_SESSION_TO_STORE', () => {

  });

  it('selectedProcessToStore should have a type of SELECTED_PROCESS_TO_STORE', () => {

  });

  it('selectedTherapyGoalToStore should have a type of SELECTED_THERAPY_GOAL_TO_STORE', () => {

  });

  it('selectedTreatmentPlanToStore should have a type of SELECTED_TREATMENT_PLAN_TO_STORE', () => {

  });

  it('concernToStore should have a type of CONCERN_TO_STORE', () => {

  });

  it('checkThreadConnections should have a type of CHECK_THREAD_CONNECTIONS', () => {

  });

  it('confirmMarkedThreadConnection should have a type of CONFIRM_MARKED_THREAD_CONNECTION', () => {

  });

  it('updateThreadConnections should have a type of UPDATE_THREAD_CONNECTIONS', () => {

  });

  it('updateThreadDomain should have a type of UPDATE_THREAD_DOMAIN', () => {

  });

  it('updateProcessComponent should have a type of UPDATE_PROCESS_COMPONENT', () => {

  });

  it('updatedTreatmentPlanToStore should have a type of UPDATE_TREATMENT_PLAN', () => {

  });

  it('updatedTherapyGoalToStore should have a type of UPDATE_THERAPY_GOAL', () => {

  });

  it('definitionsToStore should have a type of DEFINITIONS_TO_STORE', () => {

  });

  it('clinicToStore should have a type of CLINIC_TO_STORE', () => {

  });

  it('patientToStore should have a type of PATIENT_TO_STORE', () => {

  });

  it('updateUserStore should have a type of UPDATE_USER_STORE', () => {

  });

  it('processesDataToStore should have a type of PROCESSES_DATA_TO_STORE', () => {

  });

  it('comparisonDataToStore should have a type of COMPARISON_DATA_TO_STORE', () => {

  });

  it('emptyProcessData should have a type of EMPTY_PROCESS_DATA', () => {

  });

  it('emptyComparisonData should have a type of EMPTY_COMPARISON_DATA', () => {

  });

  it('emptySelectedTreatmentPlan should have a type of EMPTY_SELECTED_TREATMENT_PLAN', () => {

  });

  it('emptySelectedTherapyGoal should have a type of EMPTY_SELECTED_THERAPY_GOAL', () => {

  });

  it('emptySelectedProcess should have a type of EMPTY_SELECTED_PROCESS', () => {

  });

  it('emptySelectedSession should have a type of EMPTY_SELECTED_SESSION', () => {

  });

  it('emptySessions should have a type of EMPTY_SESSIONS', () => {

  });

  it('emptySelectedConcern should have a type of EMPTY_SELECTED_CONCERN', () => {

  });

  it('emptyPatientConcerns should have a type of EMPTY_PATIENT_CONCERNS', () => {

  });

  it('emptyCurrentPatient should have a type of EMPTY_CURRENT_PATIENT', () => {

  });
})