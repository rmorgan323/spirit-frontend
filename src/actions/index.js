import loadUser from '../helpers/loadUser/loadUser';

export const getUser = () => async dispatch => {
  try {
    const user = await loadUser();
    dispatch(userToStore(user));
  } catch (error) {
    window.location="https://spirit.e1.loginrocket.com/";
  }
};

export const userToStore = user => ({
  type: 'USER_TO_STORE',
  user
});

export const addConcern = concernObject => ({
  type: 'CONCERN_TO_STORE',
  concernObject
})

export const updateSlider = (slider) => ({
  type: 'UPDATE_SLIDER_VALUE',
  slider
})