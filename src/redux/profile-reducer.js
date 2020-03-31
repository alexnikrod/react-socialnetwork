import { usersAPI, profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO = "SAVE_PHOTO";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "My first post", likesCount: 10 }
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: action.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
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
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      };
    case SAVE_PHOTO:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      };
    default:
      return state;
  }
};

export const addPostActionCreator = newPostText => ({
  type: ADD_POST,
  newPostText
});

export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile
});

export const setUserStatus = status => ({
  type: SET_USER_STATUS,
  status
});

export const deletePost = postId => ({
  type: DELETE_POST,
  postId
});

export const savePhotoAC = photos => ({
  type: SAVE_PHOTO,
  photos
});

// thunks
// getUserProfile
export const setUserProfileThunk = userId => {
  return async dispatch => {
    let response = await usersAPI.getUserProfile(userId);
    dispatch(setUserProfile(response));
  };
};

export const getUserStatus = userId => {
  return async dispatch => {
    let response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(response));
  };
};

export const updateUserStatus = status => {
  return async dispatch => {
    let response = await profileAPI.updateUserStatus(status);
    if (response.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  };
};

export const savePhotoTh = file => {
  return async dispatch => {
    let response = await profileAPI.savePhoto(file);
    if (response.resultCode === 0) {
      dispatch(savePhotoAC(response.photos));
    }
  };
};

export const saveProfile = profile => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      dispatch(setUserProfileThunk(userId));
    } else {
      dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
      return Promise.reject(response.data.messages[0]);
    }
  };
};

export default profileReducer;
