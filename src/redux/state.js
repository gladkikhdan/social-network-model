let rerenderEntireTree = () => {
  // observer
  console.log('render check');
}

export const subscribe = observer => {
  rerenderEntireTree = observer;
}

export let state = {
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
};

export const addPost = postText => {
  let newPost = {
    id: 666,
    post: postText,
    likesCount: 2,
  };
  state.profilePage.postData.unshift(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = text => {
  state.profilePage.newPostText = text;
  rerenderEntireTree(state);
}

export const sendMessage = msgText => {
  let newMessage = { id: 5, text: msgText };
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
}

export const updateMessageText = text => {
  state.dialogsPage.newMessageText = text;
  rerenderEntireTree(state);
}