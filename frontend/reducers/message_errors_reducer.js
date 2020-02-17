// import { RECEIVE_MESSAGE_ERRORS, RECEIVE_MESSAGE, RECEIVE_SOME_MESSAGES } from '../actions/message_actions';
import { CLEAR_ERRORS } from '../actions/error_actions';

export default (state = [], action) => {
    let newState;
    switch (action.type) {
        // case RECEIVE_MESSAGE:
        //     newState = [];
        //     return newState;
        // case RECEIVE_SOME_MESSAGES:
        //     newState = [];
        //     return newState;
        case CLEAR_ERRORS:
            newState = [];
            return newState;
        // case RECEIVE_MESSAGE_ERRORS:
        //     return action.errors.responseJSON;
        default:
            return state;
    }
};