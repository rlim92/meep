import * as APIUtil from '../util/user_api_util';

export const RECEIVE_SOME_USERS = 'RECEIVE_SOME_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

const receiveSomeUsers = (members) => {
    return {
        type: RECEIVE_SOME_USERS,
        members
    }
}

const receiveUserErrors = (errors) => {
    return {
        type: RECEIVE_USER_ERRORS,
        errors
    }
}

export const fetchChannelMembers = (channelId) => {
    return (dispatch) => {
        return APIUtil.fetchChannelMembers(channelId).then(
            (messages) => { dispatch(receiveSomeUsers(messages)) },
            (errors) => { dispatch(receiveUserErrors(errors)) }
        );
    };
};