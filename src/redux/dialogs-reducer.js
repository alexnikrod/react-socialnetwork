const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      let body = stateCopy.newMessageBody;
      stateCopy.newMessageBody = "";
      stateCopy.messages.push({
        id: 4,
        message: body
      });
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_BODY:
      let stateCopy = { ...state };
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
});

export const updateNewMessageBodyCreator = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
});

export default dialogsReducer;
