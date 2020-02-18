export const fetchChannel = (id) => {
    return $.ajax({
        method: "GET",
        url: `api/channels/${id}`
    });
};

export const fetchMeeptown = () => {
    // debugger
    return $.ajax({
        method: "GET",
        url: `api/channels/`,
        data: { 
            name: 'Meeptown',
            author: 'rich'
        }
    });
};

export const fetchChannels = () => {
    return $.ajax({
        method: "GET",
        url: `api/channels/`
    });
};

export const fetchUserChannels = (userId) => {
    return $.ajax({
        method: "GET",
        url: `api/channels`,
        data: { userId }
    });
};

export const addChMember = (userId, channelId) => {
    return $.ajax({
        method: "PATCH",
        url: `api/channels/${channelId}`,
        data: { 
            userId,
            channelId
        }
    });
}

export const createChannel = (channel) => {
    return $.ajax({
        method: "POST",
        url: `api/channels`,
        data: { channel }
    });
};

export const updateChannel = (channel) => {
    return $.ajax({
        method: "PATCH",
        url: `api/channels/${channel.id}`,
        data: { channel }
    });
};

export const destroyChannel = (channelId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/channels/${channelId}`
    });
};