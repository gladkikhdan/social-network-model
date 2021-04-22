const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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