import React from 'react';
import InstructionWrapper from './InstructionWrapper';
import { shallow } from 'enzyme';

describe('InstructionWrapper tests', () => {
  it('Should match the snapshot', () => {
    const renderedInstructionWrapper = shallow(
      <InstructionWrapper>
        <div>{`Instructions`}</div>
      </InstructionWrapper>
    );

    expect(renderedInstructionWrapper).toMatchSnapshot();
  });
});
