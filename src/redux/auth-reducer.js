import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";
// Actions
const SET_USER_DATA = "react-social/auth/SET_USER_DATA"; // Redux Ducks
const LOGIN_USER = "LOGIN_USER";
const GET_CAPTCHA = "GET_CAPTCHA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  password: null,
  rememberMe: false,
  captchaUrl: null
};
// Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: true
      };
    case LOGIN_USER:
    case GET_CAPTCHA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
// Action Creators
export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth }
});

export const loginAC = (email, password, rememberMe) => ({
  type: LOGIN_USER,
  payload: { email, password, rememberMe }
});

export const getCaptchaUrlSuccess = captchaUrl => ({
  type: GET_CAPTCHA,
  payload: { captchaUrl }
});

// side effects -  thunk
// getAuthUserData
export const authThunk = () => async dispatch => {
  let response = await authAPI.getAuthData();

  if (response.resultCode === 0) {
    let { id, email, login } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

// login thunk
export const loginAuthThunk = (email, password, rememberMe, captcha) => {
  return async dispatch => {
    let response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.resultCode === 0) {
      dispatch(authThunk());
    } else {
     if (response.resultCode === 10) {
       dispatch(getCaptchaUrl())
     }

      let message =
        response.messages.length > 0 ? response.messages[0] : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logOut = () => {
  return async dispatch => {
    let response = await authAPI.logOut();

    if (response.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };
};

export default authReducer;
