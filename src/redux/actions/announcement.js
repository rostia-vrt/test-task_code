import {
    GET_ANNOUNCEMENT,
    GET_EDIT_POST,
    GET_UPDATE_POST,
    REMOVE_POST
} from "../actions";

export const getAnnouncementAction = post => ({
    type: GET_ANNOUNCEMENT,
    payload: post,
});
export const getEditPostAction = (post) => ({
    type: GET_EDIT_POST,
    payload: post,
});
export const getUpdatePostAction = (post) => ({
    type: GET_UPDATE_POST,
    payload: post,
});
export const removePostAction = (post) => ({
    type: REMOVE_POST,
    payload: post,
});
