import { RECEIVE_MESSAGE, RECEIVE_SOME_MESSAGES } from '../actions/message_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_MESSAGE:
            // newState[action.message.id] = 
            return merge({}, state, action.message);
        case RECEIVE_SOME_MESSAGES:
            return action.messages;
        default:
            return state;
    };
};