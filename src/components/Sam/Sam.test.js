import React from 'react';
import Sam from './Sam';
import { shallow } from 'enzyme';

describe('Sam tests', () => {
  it('should match snapshot', () => {
    const renderedApp = shallow(<Sam />)

    expect(renderedApp).toMatchSnapshot();
  });
});