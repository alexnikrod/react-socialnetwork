const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 2,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";

      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;

      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({
        id: 4,
        message: body
      });

      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;

      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST
});

export const updateNewPostActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
});

export const updateNewMessageBodyCreator = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
});

window.store = store;

export default store;
