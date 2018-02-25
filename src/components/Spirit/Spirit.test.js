import React from 'react';
import Spirit from './Spirit';
import { shallow } from 'enzyme';

describe('Spirit tests', () => {
  it('should match snapshot', () => {
    const renderedApp = shallow(<Spirit />)

    expect(renderedApp).toMatchSnapshot();
  });
});