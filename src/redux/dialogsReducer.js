const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    messagesData: [
      { id: 1, text: "hi" },
      { id: 2, text: "What are you doing?" },
      { id: 3, text: "I'm hungry ;(" },
      { id: 4, text: "miss you... fr fr" }
    ],
    newMessageText: '', // empty input
    dialogsData: [
      { id: 1, name: "Michel" },
      { id: 2, name: "Simon" },
      { id: 3, name: "Betty" },
      { id: 4, name: "Charles" },
      { id: 5, name: "Nathan" },
      { id: 6, name: "Gorge" }
    ],
  };

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = { id: 5, text: state.newMessageText };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;

        default:
            return state;
    };

}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE,
})

export const updateMessageTextCreator = (newText) => ({
    type: UPDATE_MESSAGE_TEXT,
    text: newText,
})

export default dialogsReducer;