import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helper";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_DISABLED = "TOGGLE_IS_DISABLED";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isDisabled: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        /* users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }) */
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case TOGGLE_IS_DISABLED:
      return {
        ...state,
        isDisabled: action.isDisabled
          ? [...state.isDisabled, action.userId]
          : state.isDisabled.filter(id => id !== action.userId) //????
      };
    default:
      return state;
  }
};
// action creators
export const follow = userId => ({
  type: FOLLOW,
  userId
});

export const unfollow = userId => ({
  type: UNFOLLOW,
  userId
});

export const setUsers = users => ({
  type: SET_USERS,
  users
});

export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
});

export const setTotalUsersCount = totalUsersCount => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount
});

export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});
// button follow or or unfollow is disabled
// to prevent queries on server
export const toggleIsDisabled = (isDisabled, userId) => ({
  type: TOGGLE_IS_DISABLED,
  isDisabled,
  userId
});
// thunk
export const getUsers = (currentPage, pageSize) => {
  return async dispatch => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    let response = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleIsDisabled(true, userId));
  let response = await apiMethod(userId);
  if (response.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsDisabled(false, userId));
};

export const unfollowThunk = userId => async dispatch => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.unfollowUsers.bind(usersAPI),
    unfollow
  );
};

export const followThunk = userId => async dispatch => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.followUsers.bind(usersAPI),
    follow
  );
};

export default usersReducer;
