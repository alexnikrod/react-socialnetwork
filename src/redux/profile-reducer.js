import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
// const UPDATE_USER_STATUS = "UPDATE_USER_STATUS"

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "My first post", likesCount: 10 }
  ],
  newPostText: "HALLO!",
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST
});

export const updateNewPostActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile
});

export const setUserStatus = status => ({
  type: SET_USER_STATUS,
  status
});

/* export const updateUserStatusAC = status => ({
  type: UPDATE_USER_STATUS,
  status
});
 */
// thunk
// getUserProfile
export const setUserProfileThunk = userId => {
  return dispatch => {
    usersAPI.getUserProfile(userId).then(data => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getUserStatus = userId => {
  return dispatch => {
    profileAPI.getUserStatus(userId).then(data => {
      dispatch(setUserStatus(data));
    });
  };
};

export const updateUserStatus = status => {
  return dispatch => {
    profileAPI.updateUserStatus(status).then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    });
  };
};

export default profileReducer;
