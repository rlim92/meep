import { RECEIVE_DM, RECEIVE_ALL_DMS, REMOVE_DM } from '../actions/dm_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_DM:
            return merge({}, state, action.dm);
        case RECEIVE_ALL_DMS:
            return action.dms;
        default:
            return state;
    };
};