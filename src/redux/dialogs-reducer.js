const SEND_MESSAGE = "SEND_MESSAGE";

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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 4,
            message: body
          }
        ]
      };
    default:
      return state;
  }
};

export const sendMessageCreator = newMessageBody => ({
  type: SEND_MESSAGE,
  newMessageBody
});

export default dialogsReducer;
