import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import css from './Dialogs.module.css';

const Dialogs = (props) => {
    let dialogsItems = props.dialogsItems.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messages = props.messages.map(msg => <Message msg={msg.text} />);

    let msgTextElement = React.createRef();

    function sendMessage() {
        props.sendMessage();
    }

    function onMessageTextChange() {
        let newMessageText = msgTextElement.current.value;
        props.onMessageTextChange(newMessageText);
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
                    value={props.newMessageText}
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