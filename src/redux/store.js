import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "My first post", likesCount: 10 }
      ],
      newPostText: "HALLO!"
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Privet" }
      ],
      dialogs: [
        { id: 1, name: "Ivan" },
        { id: 2, name: "Peter" },
        { id: 3, name: "Igor" },
        { id: 4, name: "Andrey" },
        { id: 5, name: "Lena" }
      ],
      newMessageBody: ""
    }
  },
  _callSubscriber() {
    console.log("q");
  },
  getState() {
    debugger;
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
};

window.store = store;

export default store;
