import React from 'react';
import Social from './Social';
import { shallow } from 'enzyme';

describe('Social tests', () => {
  it('should match snapshot', () => {
    const renderedApp = shallow(<Social />);

    expect(renderedApp).toMatchSnapshot();
  });
});