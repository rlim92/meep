export const fetchChannelMembers = (channelId) => {
    return $.ajax({
        method: "GET",
        url: `api/users`,
        data: { channelId }
    });
};

export const fetchUserDmMembers = (userDmId) => {
    // debugger
    return $.ajax({
        method: "GET",
        url: `api/users`,
        data: { userDmId }
    });
};


export const fetchDmMembers = (dmId) => {
    // debugger
    return $.ajax({
        method: "GET",
        url: `api/users`,
        data: { dmId }
    });
};

