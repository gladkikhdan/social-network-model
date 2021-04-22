import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import css from './Dialogs.module.css';
import { sendMessageCreator, updateMessageTextCreator } from '../../redux/dialogsReducer';

const Dialogs = (props) => {
    let dialogsItems = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messages = props.state.messagesData.map(msg => <Message msg={msg.text} />);

    let msgTextElement = React.createRef();

    function sendMessage() {
        props.dispatch(sendMessageCreator());
    }

    function onMessageTextChange() {
        let newMessageText = msgTextElement.current.value;
        props.dispatch(updateMessageTextCreator(newMessageText));
    }

    return (
        <div className={css.wrapper}>
            <div className={css.items}>
                {dialogsItems}
            </div>
            <div className={css.messages}>
                {messages}
                <textarea ref={msgTextElement}
                    onChange={onMessageTextChange}
                    value={props.state.newMessageText}
                    cols="30" rows="4"
                    placeholder="Enter a message"></textarea>
                <div>
                    <button type='button' onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;