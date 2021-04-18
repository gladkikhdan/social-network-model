import React from 'react';
import css from '../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={css.message}>{props.msg}</div>
    )
}

export default Message;