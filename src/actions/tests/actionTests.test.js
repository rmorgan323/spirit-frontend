import * as actions from '../index';
import mockUserData from '../../data/mockData/mockUserData';
import mockPatient from '../../data/mockData/mockPatient';
import mockConcernData from '../../data/mockData/mockConcernData';
import mockConcern from '../../data/mockData/mockConcern';
import mockSession from '../../data/mockData/mockSession';
import mockProcess from '../../data/mockData/mockProcess';
import mockTherapyGoal from '../../data/mockData/mockTherapyGoal';
import mockTreatmentPlan from '../../data/mockData/mockTreatmentPlan';
import mockSelectedProcess from '../../data/mockData/mockSelectedProcess';
import mockStoredThreadConnections from '../../data/mockData/mockStoredThreadConnections';
import mockDefinitions from '../../data/mockData/mockDefinitions';
import mockClinic from '../../data/mockData/mockClinicData';
import mockProcessesData from '../../data/mockData/mockProcessesData';

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

  it('updateSessionsArray should have a type of UPDATE_SESSIONS_ARRAY', () => {
    const sessionId = 1;
    const status = [mockSession]
    const expected = {
      type: 'UPDATE_SESSIONS_ARRAY',
      sessionId,
      status
    };

    expect(actions.updateSessionsArray(sessionId, status)).toEqual(expected);
  });

  it('updateSelectedSession should have a type of UPDATE_SELECTED_SESSION', () => {
    const body = { completed: true }
    const expected = {
      type: 'UPDATE_SELECTED_SESSION',
      body
    };

    expect(actions.updateSelectedSession(body)).toEqual(expected);
  });

  it('selectedSessionToStore should have a type of SELECTED_SESSION_TO_STORE', () => {
    const selectedSession = mockSession;
    const expected = {
      type: 'UPDATE_SELECTED_SESSION',
      selectedSession
    };

    expect(actions.updateSelectedSession(selectedSession)).toEqual(expected);
  });

  it('selectedProcessToStore should have a type of SELECTED_PROCESS_TO_STORE', () => {
    const selectedProcess = mockProcess;
    const expected = {
      type: 'SELECTED_PROCESS_TO_STORE',
      selectedProcess
    };

    expect(actions.selectedProcessToStore(selectedProcess)).toEqual(expected);
  });

  it('selectedTherapyGoalToStore should have a type of SELECTED_THERAPY_GOAL_TO_STORE', () => {
    const selectedTherapyGoal = mockTherapyGoal;
    const expected = {
      type: 'SELECTED_THERAPY_GOAL_TO_STORE',
      selectedTherapyGoal
    };

    expect(actions.selectedTherapyGoalToStore(selectedTherapyGoal)).toEqual(expected);
  });

  it('selectedTreatmentPlanToStore should have a type of SELECTED_TREATMENT_PLAN_TO_STORE', () => {
    const selectedTreatmentPlan = mockTreatmentPlan;
    const expected = {
      type: 'SELECTED_TREATMENT_PLAN_TO_STORE',
      selectedTreatmentPlan
    };

    expect(actions.selectedTreatmentPlanToStore(selectedTreatmentPlan)).toEqual(expected);
  });

  it('concernToStore should have a type of CONCERN_TO_STORE', () => {
    const concern = mockConcern;
    const expected = {
      type: 'CONCERN_TO_STORE',
      concern
    };

    expect(actions.concernToStore(concern)).toEqual(expected);
  });

  it('checkThreadConnections should have a type of CHECK_THREAD_CONNECTIONS', () => {
    const selectedProcess = mockSelectedProcess;
    const expected = {
      type: 'CHECK_THREAD_CONNECTIONS',
      selectedProcess
    };

    expect(actions.checkThreadConnections(selectedProcess)).toEqual(expected);
  });

  it('confirmMarkedThreadConnection should have a type of CONFIRM_MARKED_THREAD_CONNECTION', () => {
    const updatedProcess = mockSelectedProcess;
    const expected = {
      type: 'CONFIRM_MARKED_THREAD_CONNECTION',
      updatedProcess
    };

    expect(actions.confirmMarkedThreadConnection(updatedProcess)).toEqual(expected);
  });

  it('updateThreadConnections should have a type of UPDATE_THREAD_CONNECTIONS', () => {
    const threadConnections = mockStoredThreadConnections;
    const expected = {
      type: 'UPDATE_THREAD_CONNECTIONS',
      threadConnections
    };

    expect(actions.updateThreadConnections(threadConnections)).toEqual(expected);
  });

  it('updateThreadDomain should have a type of UPDATE_THREAD_DOMAIN', () => {
    const domain = 'Modulation';
    const expected = {
      type: 'UPDATE_THREAD_DOMAIN',
      domain
    };

    expect(actions.updateThreadDomain(domain)).toEqual(expected);
  });

  it('updateProcessComponent should have a type of UPDATE_PROCESS_COMPONENT', () => {
    const updatedProcess = mockSelectedProcess;
    const expected = {
      type: 'UPDATE_PROCESS_COMPONENT',
      updatedProcess
    };

    expect(actions.updateProcessComponent(updatedProcess)).toEqual(expected);
  });

  it('updatedTreatmentPlanToStore should have a type of UPDATE_TREATMENT_PLAN', () => {
    const updatedTreatmentPlan = mockTreatmentPlan;
    const expected = {
      type: 'UPDATE_TREATMENT_PLAN',
      updatedTreatmentPlan
    };

    expect(actions.updatedTreatmentPlanToStore(updatedTreatmentPlan)).toEqual(expected);
  });

  it('updatedTherapyGoalToStore should have a type of UPDATE_THERAPY_GOAL', () => {
    const updatedTherapyGoal = mockTherapyGoal;
    const expected = {
      type: 'UPDATE_THERAPY_GOAL',
      updatedTherapyGoal
    };

    expect(actions.updatedTherapyGoalToStore(updatedTherapyGoal)).toEqual(expected);
  });

  it('definitionsToStore should have a type of DEFINITIONS_TO_STORE', () => {
    const definitions = mockDefinitions;
    const expected = {
      type: 'DEFINITIONS_TO_STORE',
      definitions
    };

    expect(actions.definitionsToStore(definitions)).toEqual(expected);
  });

  it('clinicToStore should have a type of CLINIC_TO_STORE', () => {
    const clinic = mockClinic;
    const expected = {
      type: 'CLINIC_TO_STORE',
      clinic
    };

    expect(actions.clinicToStore(clinic)).toEqual(expected);
  });

  it('patientToStore should have a type of PATIENT_TO_STORE', () => {
    const patient = mockPatient;
    const expected = {
      type: 'PATIENT_TO_STORE',
      patient
    };

    expect(actions.patientToStore(patient)).toEqual(expected);
  });

  it('updateUserStore should have a type of UPDATE_USER_STORE', () => {
    const clinicData = mockClinic;
    const expected = {
      type: 'UPDATE_USER_STORE',
      clinicData
    };

    expect(actions.updateUserStore(clinicData)).toEqual(expected);
  });

  it('processesDataToStore should have a type of PROCESSES_DATA_TO_STORE', () => {
    const cleanProcesses = mockProcessesData;
    const expected = {
      type: 'PROCESSES_DATA_TO_STORE',
      cleanProcesses
    };

    expect(actions.processesDataToStore(cleanProcesses)).toEqual(expected);
  });

  xit('comparisonDataToStore should have a type of COMPARISON_DATA_TO_STORE', () => {
    // const cleanData = ; NEED MOCK DATA FILE
    const expected = {
      type: 'COMPARISON_DATA_TO_STORE',
      cleanData
    };

    expect(actions.comparisonDataToStore(cleanData)).toEqual(expected)
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