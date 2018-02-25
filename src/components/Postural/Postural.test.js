import React from 'react';
import Postural from './Postural';
import { shallow } from 'enzyme';

describe('Postural tests', () => {
  it('should match snapshot', () => {
    const renderedApp = shallow(<Postural />)

    expect(renderedApp).toMatchSnapshot();
  });
});