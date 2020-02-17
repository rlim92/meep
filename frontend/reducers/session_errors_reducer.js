import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { CLEAR_ERRORS } from '../actions/error_actions';

export default (state = [], action) => {
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = [];
            return newState;
        case RECEIVE_SESSION_ERRORS:
            return action.errors.responseJSON;
        case CLEAR_ERRORS:
            newState = [];
            return newState;
        default:
            return state;
    }
};