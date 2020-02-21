import { receiveCurrentUser } from '../actions/session_actions';
import * as APIUtil from '../util/dm_api_utils';


export const RECEIVE_DM = 'RECEIVE_DM';
export const RECEIVE_ALL_DMS = 'RECEIVE_ALL_DMS';
// export const REMOVE_DM = 'REMOVE_DM';
export const RECEIVE_DM_ERRORS = 'RECEIVE_DM_ERRORS';

const receiveDm = (dm) => {
    return {
        type: RECEIVE_DM,
        dm
    };
};

const receiveAllDms = (dms) => {
    // debugger
    return {
        type: RECEIVE_ALL_DMS,
        dms
    };
};

export const fetchDm = (id) => {
    return (dispatch) => {
        return APIUtil.fetchDm(id).then(dm => {
            dispatch(receiveDm(dm));
        });
    };
};

export const fetchUserDms = (userId) => {
    return (dispatch) => {
        return APIUtil.fetchUserDms(userId).then(dms => {
            dispatch(receiveAllDms(dms));
        });
    };
};

export const createDm = (dm) => {
    return (dispatch) => {
        return APIUtil.createDm(dm).then(dm => {
            dispatch(receiveDm(dm));
        });
    };
};