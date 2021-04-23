import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateMessageTextCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = state => ({
    dialogsPage: state.dialogsPage,
})

let mapDispatchToProps = dispatch => ({
    sendMessage: () => {
        dispatch(sendMessageCreator());
    },
    onMessageTextChange: text => {
        dispatch(updateMessageTextCreator(text));
    },
})


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;