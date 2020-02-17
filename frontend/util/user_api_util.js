export const fetchChannelMembers = (channelId) => {
    return $.ajax({
        method: "GET",
        url: `api/users`,
        data: { channelId }
    });
};

export const fetchDmMembers = (dmId) => {
    return $.ajax({
        method: "GET",
        url: `api/users`,
        data: { dmId }
    });
};

