import React from 'react';
import Sensory from './Sensory';
import { shallow } from 'enzyme';

describe('Sensory tests', () => {
  it('should match snapshot', () => {
    const renderedApp = shallow(<Sensory />);

    expect(renderedApp).toMatchSnapshot();
  });
});