import { authThunk } from "./auth-reducer";

const INITIALIZED_SUCCESSFULLY = "INITIALIZED_SUCCESSFULLY";

let initialState = {
  initialized: false
};

// action
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESSFULLY:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};
// action creator
export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESSFULLY
});

// thunk
export const initializeApp = () => dispatch => {
  let promise = dispatch(authThunk());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
