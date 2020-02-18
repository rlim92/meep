import * as APIUtil from '../util/channels_api_util';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';

const receiveChannel = (channel) => {
    return {
        type: RECEIVE_CHANNEL,
        channel
    };
};

const receiveAllChannels = (channels) => {
    return {
        type: RECEIVE_ALL_CHANNELS,
        channels
    };
};

const removeChannel = (channelId) => {
    return {
        type: RECEIVE_ALL_CHANNELS
    };
};

const receiveChannelErrors = (errors) => {
    return {
        type: RECEIVE_CHANNEL_ERRORS,
        errors
    };
};

export const fetchChannel = (id) => {
    return (dispatch) => {
        return APIUtil.fetchChannel(id).then(channel => {
            dispatch(receiveChannel(channel));
        });
    };
};

export const fetchMeeptown = () => {
    // debugger
    return (dispatch) => {
        return APIUtil.fetchMeeptown().then(channel => {
            return channel.id
        });
    };
};

export const fetchUserChannels = (userId) => {
    return (dispatch) => {
        return APIUtil.fetchUserChannels(userId).then(channels => {
            dispatch(receiveAllChannels(channels));
        });
    };
};

export const fetchChannels = () => {
    return (dispatch) => {
        return APIUtil.fetchChannels().then(channels => {
            dispatch(receiveAllChannels(channels));
        });
    };
};

export const createChannel = (channel) => {
    return (dispatch) => {
        return APIUtil.createChannel(channel).then(channel => {
            dispatch(receiveChannel(channel));
        });
    };
};

export const addChMember = (userId, channelId) => {
    return (dispatch) => {
        return APIUtil.addChMember(userId, channelId).then(channel => {
            dispatch(receiveChannel(channel));
        });
    };
};

export const updateChannel = (channel) => {
    return (dispatch) => {
        return APIUtil.updateChannel(channel).then(channel => {
            dispatch(receiveChannel(channel));
        });
    };
};

export const destroyChannel = (channelId) => {
    return (dispatch) => {
        return APIUtil.destroyChannel(channelId).then(channel => {
            dispatch(removeChannel(channel.id));
        });
    };
};