import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import css from './Dialogs.module.css';

const Dialogs = (props) => {
    let dialogsItems = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messages = props.dialogsPage.messagesData.map(msg => <Message msg={msg.text} key={msg.id}  />);

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
                    value={props.dialogsPage.newMessageText}
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