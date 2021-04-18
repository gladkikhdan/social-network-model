import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import css from './Dialogs.module.css';

const Dialogs = (props) => {  
    let dialogsItems = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messages = props.state.messagesData.map(msg => <Message msg={msg.text} />);

    return (
        <div className={css.wrapper}>
            <div className={css.items}>
                {dialogsItems}
            </div>
            <div className={css.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;