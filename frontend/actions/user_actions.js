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

export const fetchDmMembers = (dmId) => {
    return (dispatch) => {
        return APIUtil.fetchDmMembers(dmId).then(
            (messages) => { dispatch(receiveSomeUsers(messages)) },
            (errors) => { dispatch(receiveUserErrors(errors)) }
        );
    };
};

export const fetchUserDmMembers = (userId) => {
    return (dispatch) => {
        return APIUtil.fetchUserDmMembers(userId).then(
            (members) => { 
                // debugger;
                dispatch(receiveSomeUsers(members)) 
            },
            (errors) => { dispatch(receiveUserErrors(errors)) }
        );
    };
};