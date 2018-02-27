import React from 'react';
import { ConcernRow, mapDispatchToProps } from './ConcernRow';
import { shallow } from 'enzyme';

describe('ConcernRow tests', () => {
  let renderedConcernRow;
  let mockGetConcern;

  beforeEach(() => {
    mockGetConcern = jest.fn();

    renderedConcernRow = shallow(<ConcernRow getConcern={mockGetConcern} />);
  });

  it('Should match the snapshot', () => {
    expect(renderedConcernRow).toMatchSnapshot();
  });
});

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when getConcern is called', () => {
    const mockDispatch = jest.fn();
    const mockParameters = 5;
    const result = mapDispatchToProps(mockDispatch);

    result.getConcern(mockParameters);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
