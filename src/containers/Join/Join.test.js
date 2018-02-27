import React from 'react';
import { Join, mapStateToProps, mapDispatchToProps } from './Join';
import { shallow } from 'enzyme';
import { mockUserData } from '../../data/mockData/mockUserData';

describe('Join tests', () => {
  it('should match snapshot', () => {
    const renderedApp = shallow(<Join user={mockUserData} />);

    expect(renderedApp).toMatchSnapshot();
  });

  it('should set state on input', () => {
    const renderedApp = shallow(<Join user={mockUserData} />);
    const mockEvent = { target: { name: 'clinicPasscode', value: 'mfjsd7js' }};

    renderedApp.instance().handleChange(mockEvent);
    expect(renderedApp.state('clinicPasscode')).toEqual('mfjsd7js');
  });

  it('should set state for error message if the passcode is the wrong length', () => {
    const renderedApp = shallow(<Join user={mockUserData} joinExistingClinic={jest.fn()} />);
    const mockEvent = { preventDefault: jest.fn() };

    renderedApp.instance().joinClinic(mockEvent, 'jfawf8f');
    expect(renderedApp.state('error')).toEqual(
      'A clinic passcode must be exactly eight characters in length'
    );
  });


  //   return 'My New Clinic';
  // }

  // it('should return a success message if the passcode matches', () => {
    
  //   const mockJoinExistingGroup = jest.fn().mockReturnValueOnce(Promise.resolve());
    
  //   // mockJoinExistingGroup.mockReturnValueOnce(true).mockReturnValueOnce(false);
  //   // const result = ['My New Clinic', 'error'].filter(mockJoinExistingGroup);

  //   // console.log(result[0])

  //   // // const mockJoinExistingGroup = jest.fn();
  //   // // mockJoinExistingGroup.mockReturnValueOnce('My New Clinic');

  //   const mockEvent = { preventDefault: jest.fn() };
  //   const renderedApp = shallow(<Join user={mockUserData} joinExistingClinic={mockJoinExistingGroup} />);

  //   renderedApp.instance().joinClinic(mockEvent, 'jfawf8fa');
  //   expect(renderedApp.state('success')).toEqual('You have successfully joined My New Clinic!');
  // });
});

describe('mapStateToProps tests', () => {
  it('should pull user from store', () => {
    const mockStore = { mockUserData };
    const result = mapStateToProps(mockStore);

    expect(result.user).toEqual(mockStore.user);
  });
});

describe('mapDispatchToProps tests', () => {
  it('should call dispatch when joinExistingClinic is called', () => {
    const mockDispatch = jest.fn();
    const mockParams = ({
      passcode: '3jfs0jek'
    }, 5);
    const result = mapDispatchToProps(mockDispatch);

    result.joinExistingClinic(mockParams);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
