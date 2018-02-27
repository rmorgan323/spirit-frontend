import React from 'react';
import {
  TherapyGoals,
  mapStateToProps,
  mapDispatchToProps
} from './TherapyGoals';
import { shallow } from 'enzyme';
import { mockTherapyGoal } from '../../data/mockData/mockTherapyGoal';

describe('TherapyGoals tests', () => {
  let category;
  let selectedTherapyGoal;
  let getTherapyGoal;
  let number;
  let title;
  let renderedTherapyGoal;

  beforeEach(() => {
    category = 'Sensory';
    selectedTherapyGoal = mockTherapyGoal;
    getTherapyGoal = jest.fn();
    number = '1';
    title = 'Title';

    renderedTherapyGoal = shallow(
      <TherapyGoals
        category={category}
        selectedTherapyGoal={selectedTherapyGoal}
        getTherapyGoal={getTherapyGoal}
        number={number}
        title={title}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedTherapyGoal).toMatchSnapshot();
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull a selectedTherapyGoal from store', () => {
    const selectedTherapyGoal = mockTherapyGoal;
    const mockStore = { selectedTherapyGoal };
    const result = mapStateToProps(mockStore);

    expect(result.selectedTherapyGoal).toEqual(mockStore.selectedTherapyGoal);
  });
});

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when getTherapyGoal is called', () => {
    const mockDispatch = jest.fn();
    const mockParameters = [
      5,
      {
        title: 'Sensory',
        notes: 'Should be more aware'
      }
    ];
    const result = mapDispatchToProps(mockDispatch);

    result.getTherapyGoal(...mockParameters);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
