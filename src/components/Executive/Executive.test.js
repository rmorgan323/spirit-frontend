import React from 'react';
import Executive from './Executive';
import { shallow } from 'enzyme';

describe('Executive tests', () => {
  it('should match snapshot', () => {
    const renderedApp = shallow(<Executive />)

    expect(renderedApp).toMatchSnapshot();
  })
})