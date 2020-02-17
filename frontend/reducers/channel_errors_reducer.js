import { RECEIVE_CHANNEL_ERRORS, RECEIVE_CHANNEL, RECEIVE_ALL_CHANNELS, REMOVE_CHANNEL } from '../actions/channel_actions';
import { CLEAR_ERRORS } from '../actions/error_actions';

export default (state = [], action) => {
    let newState;
    switch (action.type) {
        case RECEIVE_CHANNEL:
            newState = [];
            return newState;
        case RECEIVE_ALL_CHANNELS:
            newState = [];
            return newState;
        case REMOVE_CHANNEL:
            newState = [];
            return newState;
        case CLEAR_ERRORS:
            newState = [];
            return newState;
        case RECEIVE_CHANNEL_ERRORS:
            return action.errors.responseJSON;
        default:
            return state;
    }
};