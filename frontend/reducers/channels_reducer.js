import { RECEIVE_CHANNEL, RECEIVE_ALL_CHANNELS, REMOVE_CHANNEL } from '../actions/channel_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CHANNEL:
            return merge({}, state, action.channel);
        case RECEIVE_ALL_CHANNELS:
            return action.channels;
        case REMOVE_CHANNEL:
            // debugger
            newState = merge({}, state);
            delete newState[action.channelId]
            return newState;
        default:
            return state;
    };
};