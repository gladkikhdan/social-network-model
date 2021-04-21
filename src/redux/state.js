const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, post: "Hey, how are you?", likesCount: 15 },
        { id: 2, post: "It's my first post on this website!", likesCount: 22 },
        { id: 3, post: "Hey hey hey, some REACT.JS fo u", likesCount: 11 },
      ],
      newPostText: '', // empty input
    },
    dialogsPage: {
      messagesData: [
        { id: 1, text: "hi" },
        { id: 2, text: "What are you doing?" },
        { id: 3, text: "I'm hungry ;(" },
        { id: 4, text: "miss you... fr fr" }
      ],
      newMessageText: '', // empty input
      dialogsData: [
        { id: 1, name: "Michel" },
        { id: 2, name: "Simon" },
        { id: 3, name: "Betty" },
        { id: 4, name: "Charles" },
        { id: 5, name: "Nathan" },
        { id: 6, name: "Gorge" }
      ],
    },
  },

  _subscriber() {
    // render
    console.log('observer');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._subscriber = observer;
  },

  // all actions
  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        let newPost = {
          id: 666,
          post: this._state.profilePage.newPostText,
          likesCount: 2,
        };
        this._state.profilePage.postData.unshift(newPost);
        this._state.profilePage.newPostText = '';
        this._subscriber(this._state);
        break;
      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.text;
        this._subscriber(this._state);
        break;
      case 'SEND-MESSAGE':
        let newMessage = { id: 5, text: this._state.dialogsPage.newMessageText };
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._subscriber(this._state);
        break;
      case 'UPDATE-MESSAGE-TEXT':
        this._state.dialogsPage.newMessageText = action.text;
        this._subscriber(this._state);
        break;
      default:
        console.log('dispatch error: command not found');
    };
  }
}

export const addPostActionCreator = () => ({
  type: ADD_POST,
})

export const textChangeActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text,
})