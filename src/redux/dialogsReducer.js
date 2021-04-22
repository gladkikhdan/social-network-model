const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
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
    type: 'SEND-MESSAGE',
})

export const updateMessageTextCreator = (newText) => ({
    type: 'UPDATE-MESSAGE-TEXT',
    text: newText,
})

export default dialogsReducer;