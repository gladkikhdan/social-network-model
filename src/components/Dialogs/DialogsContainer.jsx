import React from 'react';
import { sendMessageCreator, updateMessageTextCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    function sendMessage() {
        props.store.dispatch(sendMessageCreator());
    }

    function onMessageTextChange(text) {
        props.store.dispatch(updateMessageTextCreator(text));
    }

    return (
        <Dialogs
            dialogsItems={props.store.getState().dialogsPage.dialogsData}
            messages={props.store.getState().dialogsPage.messagesData}
            newMessageText={props.store.getState().dialogsPage.newMessageText}
            sendMessage={sendMessage}
            onMessageTextChange={onMessageTextChange}
        />
    )
}

export default DialogsContainer;