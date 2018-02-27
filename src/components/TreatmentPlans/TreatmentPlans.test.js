import React from 'react';
import TreatmentPlans from './TreatmentPlans';
import { shallow } from 'enzyme';

describe('TreatmentPlans tests', () => {
  it('Should match snapshot', () => {
    const renderedTreatmentPlans = shallow(<TreatmentPlans />);

    expect(renderedTreatmentPlans).toBeDefined;
  });
});
