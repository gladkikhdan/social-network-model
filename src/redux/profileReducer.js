const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
      { id: 1, post: "Hey, how are you?", likesCount: 15 },
      { id: 2, post: "It's my first post on this website!", likesCount: 22 },
      { id: 3, post: "Hey hey hey, some REACT.JS fo u", likesCount: 11 },
    ],
    newPostText: '', // empty input
  };

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 666,
                post: state.newPostText,
                likesCount: 2,
            };
            state.postData.unshift(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;

        default:
            return state;
    };
}

export const addPostCreator = () => ({
    type: 'ADD-POST',
})

export const textChangeCreator = (text) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    text: text,
})

export default profileReducer;