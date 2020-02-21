import * as APIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_SOME_MESSAGES = 'RECEIVE_SOME_MESSAGES';
export const RECEIVE_MESSAGE_ERRORS = 'RECEIVE_MESSAGE_ERRORS';

export const receiveMessage = (message) => {
    return {
        type: RECEIVE_MESSAGE,
        message
    };
};

const receiveSomeMessages = (messages) => {
    return {
        type: RECEIVE_SOME_MESSAGES,
        messages
    };
};

const receiveMessageErrors = (errors) => {
    return {
        type: RECEIVE_MESSAGE_ERRORS,
        errors
    };
};

export const fetchChannelMessages = (channelId) => {
    return (dispatch) => {
        return APIUtil.fetchChannelMessages(channelId).then(
            (messages)=> { dispatch(receiveSomeMessages(messages)) },
            (errors) => { dispatch(receiveMessageErrors(errors)) }
        );
    };
};

export const fetchDmMessages = (dmId) => {
    return (dispatch) => {
        return APIUtil.fetchDmMessages(dmId).then(
            (messages) => { dispatch(receiveSomeMessages(messages)) },
            (errors) => { dispatch(receiveMessageErrors(errors)) }
        );
    };
};

// export const createMessage = (message) => {
//     return (dispatch) => {
//         return APIUtil.createMessage(message).then(
//             (message) => { dispatch(receiveMessage(message)) },
//             (errors) => { dispatch(receiveMessageErrors(errors)) }
//         );
//     };
// };

// export const updateMessage = (messageId) => {
//     return (dispatch) => {
//         return APIUtil.updateMessage(messageId).then(
//             (message) => { dispatch(receiveMessage(message)) },
//             (errors) => { dispatch(receiveMessageErrors(errors)) }
//         );
//     };
// };


// export const ADD_MESSAGE = 'ADD_MESSAGE';
// export const SET_MESSAGES = 'SET_MESSAGES';

// export const setMessages = (messages) => {
//     return {
//         type: SET_MESSAGES,
//         messages
//     };
// }

// export const addMessage = (message) => {
//     return {
//         type: ADD_MESSAGE,
//         message: message
//     };
// }