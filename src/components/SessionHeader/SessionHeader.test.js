import React from 'react';
import SessionHeader from './SessionHeader';
import { shallow } from 'enzyme';
import { mockTitle, mockHeadings, mockDatabaseNamesArray } from '../../data/mockData/mockSessionHeaderData';

describe('SessionHeader tests', () => {
  it('should match snapshot', () => {
    const renderedApp = (
      <SessionHeader 
        title={mockTitle}
        headings={mockHeadings}
        databaseNamesArray={mockDatabaseNamesArray}
      />
    )

    expect(renderedApp).toMatchSnapshot();
  });

  it('should match snapshot if some props are empty arrays', () => {
    const renderedApp = (
      <SessionHeader 
        title={mockTitle}
        headings={[]}
        databaseNamesArray={[]}
      />
    )
  });
});