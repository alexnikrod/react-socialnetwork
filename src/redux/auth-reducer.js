import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const LOGIN_USER = "LOGIN_USER";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  password: null,
  rememberMe: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
      case LOGIN_USER:
        return {
          ...state,
          ...action.data,
        };
    default:
      return state;
  }
};
// action creators
export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login }
});

export const loginAuthDataAC = (email, password, rememberMe) => ({
  type: LOGIN_USER,
  data: { email, password, rememberMe }
});

// thunk
// getAuthUserData
export const authThunk = () => {
  return dispatch => {
    authAPI.getAuthData().then(data => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    });
  };
};

export const loginAuthThunk = () => {
  return dispatch => {
    authAPI.loginAuthData().then(data => {
      if (data.resultCode === 0) {
        let { email, password, rememberMe } = data.data;
        dispatch(loginAuthDataAC(email, password, rememberMe));
      }
    });
  };
};

export default authReducer;
