const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    /* {
      id: 1,
      firstName: "Alex",
      photoUrl: "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg",
      followed: true,
      status: "Feel good",
      location: { city: "Togliatty", country: "Russia" }
    },
    {
      id: 2,
      firstName: "Ivan",
      photoUrl: "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg",
      followed: false,
      status: "Great day",
      location: { city: "New York", country: "USA" }
    },
    {
      id: 3,
      firstName: "Mike",
      photoUrl: "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg",
      followed: true,
      status: "Cool",
      location: { city: "London", country: "UK" }
    } */
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      };
    default:
      return state;
  }
};

export const followAC = userId => ({
  type: FOLLOW,
  userId
});

export const unfollowAC = userId => ({
  type: UNFOLLOW,
  userId
});

export const setUsersAC = users => ({
  type: SET_USERS,
  users
});

export default usersReducer;
