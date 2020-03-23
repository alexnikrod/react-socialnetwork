import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

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
        ...action.payload,
        isAuth: true
      };
    case LOGIN_USER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
// action creators
export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth }
});

export const loginAC = (email, password, rememberMe) => ({
  type: LOGIN_USER,
  payload: { email, password, rememberMe }
});

// thunk
// getAuthUserData
export const authThunk = () => dispatch => {
  return authAPI.getAuthData().then(data => {
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

// login thunk
export const loginAuthThunk = (email, password, rememberMe) => {
  return dispatch => {
    authAPI.login(email, password, rememberMe).then(data => {
      if (data.resultCode === 0) {
        dispatch(authThunk());
      } else {
        let message =
          data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
      }
    });
  };
};

export const logOut = () => {
  return dispatch => {
    authAPI.logOut().then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
