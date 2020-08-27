import {GET_ANNOUNCEMENT, GET_EDIT_POST, GET_UPDATE_POST, REMOVE_POST} from "../actions";

const INIT_STATE = {
   posts: [],
    edit_post: null
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_ANNOUNCEMENT:
            return {...state, posts: [...state.posts, action.payload]};
        case GET_EDIT_POST:
            return {...state, edit_post: action.payload};
        case GET_UPDATE_POST:
            const index = state.posts.findIndex(
                item => item.id === action.payload.id
            );
            state.posts.splice(index, 1, action.payload);
            return { ...state, posts: [...state.posts] };
        case REMOVE_POST:
            return {
                ...state, posts: [...state.posts.filter(item => item.id !== action.payload.id)]
            };
        default:
            return {...state};
    }
}
