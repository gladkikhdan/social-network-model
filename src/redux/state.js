import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";

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
    navbar: {},
  },

  _subscriber() {
    // render
    console.log('observer: render');
  },  

  subscribe(observer) {
    this._subscriber = observer;
  },

  getState() {
    return this._state;
  },

  // all actions
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.navbar = navbarReducer(this._state.navbar, action);
    this._subscriber(this._state);
  }
}