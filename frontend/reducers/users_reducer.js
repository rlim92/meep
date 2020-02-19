import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_SOME_USERS } from '../actions/user_actions';
import { REMOVE_CHANNEL } from '../actions/channel_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, {[action.user.id]: action.user});
        case RECEIVE_SOME_USERS:
            return action.members;
        case REMOVE_CHANNEL:
            newState = merge({}, state);
            newState[action.userId].channel_ids = newState[action.userId].channel_ids.filter(id => id !== action.channelId);
        default:
            return state;
    };
};