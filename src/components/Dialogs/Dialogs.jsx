import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import css from './Dialogs.module.css';

const Dialogs = (props) => {
    let dialogsItems = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messages = props.state.messagesData.map(msg => <Message msg={msg.text} />);

    let msgTextElement = React.createRef();

    function createMessage() {
        let msgText = msgTextElement.current.value;
        props.dispatch({
            type: 'SEND-MESSAGE',
        });
    }

    function onMessageTextChange() {
        let newMessageText = msgTextElement.current.value;
        props.dispatch({
            type: 'UPDATE-MESSAGE-TEXT',
            text: newMessageText,
        });
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
                    cols="30" rows="4"></textarea>
                <div>
                    <button type='button' onClick={createMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;