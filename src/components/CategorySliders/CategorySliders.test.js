import React from 'react';
import CategorySliders from './CategorySliders';
import { shallow } from 'enzyme';
import { 
  mockTitle, 
  mockSlidersArray, 
  mockDatabaseNamesArray, 
  mockReminderAsterisk, 
  mockReminder 
} from '../../data/mockData/mockCategorySlidersData';

describe('CategorySliders tests', () => {
  it('should match snapshot', () => {

    const renderedApp = shallow(<CategorySliders
      title={mockTitle}
      slidersArray={mockSlidersArray}
      databaseNamesArray={mockDatabaseNamesArray}
      reminderAsterisk={mockReminderAsterisk}
      reminder={mockReminder}
    />)

    expect(renderedApp).toMatchSnapshot();
  })

  it('should match the snapshot if only some props are passed in', () => {
    const renderedApp = shallow(<CategorySliders 
      slidersArray={mockSlidersArray}
      databaseNamesArray={mockDatabaseNamesArray}
    />)
  })
})