export const fetchChannelMessages = (channelId) => {
    return $.ajax({
        method: "GET",
        url: `api/messages`,
        data: { channelId }
    });
};

export const fetchDmMessages = (dmId) => {
    return $.ajax({
        method: "GET",
        url: `api/messages`,
        data: { dmId }
    });
};

export const createMessage = (message) => {
    return $.ajax({
        method: "POST",
        url: `api/channel/${message.messageable_id}/messages`,
        data: { channel }
    });
};

export const updateMessage = (message) => {
    return $.ajax({
        method: "PATCH",
        url: `api/channels/${message.id}`,
        data: { message }
    });
};
