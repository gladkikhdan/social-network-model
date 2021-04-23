import { cloneDeep } from "lodash";

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
    let stateCopy = cloneDeep(state);
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 666,
                post: stateCopy.newPostText,
                likesCount: 2,
            };
            stateCopy.postData.unshift(newPost);
            stateCopy.newPostText = '';
            return stateCopy;

        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.text;            
            return stateCopy;

        default:
            return stateCopy;
    };
}

export const addPostCreator = () => ({
    type: ADD_POST,
})

export const textChangeCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text,
})

export default profileReducer;