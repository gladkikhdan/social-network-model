import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import css from './Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={css.message}>{props.msg}</div>
    )
}

let dialogsData = [
    {id: 1, name: "Michel"},
    {id: 2, name: "Simon"},
    {id: 3, name: "Betty"},
    {id: 4, name: "Charles"},
    {id: 5, name: "Nathan"},
    {id: 6, name: "Gorge"}
];

let messagesData = [
    {id: 1, message: "hi"},
    {id: 2, message: "What are you doing?"},
    {id: 3, message: "I'm hungry ;("},
    {id: 4, message: "miss you... fr fr"}
];


const Dialogs = (props) => {
    return (
        <div className={css.wrapper}>
            <div className={css.items}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />                
            </div>
            <div className={css.messages}>
                <Message msg={messagesData[0].message} />
                <Message msg={messagesData[1].message} />
                <Message msg={messagesData[2].message} />
                <Message msg={messagesData[3].message} />
            </div>
        </div>
    )
}

export default Dialogs;