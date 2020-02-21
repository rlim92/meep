export const fetchDm = (id) => {
    return $.ajax({
        method: "GET",
        url: `api/direct_messages/${id}`
    });
};

export const fetchDms = () => {
    return $.ajax({
        method: "GET",
        url: `api/direct_messages/`
    });
};

export const fetchUserDms = (userId) => {
    return $.ajax({
        method: "GET",
        url: `api/direct_messages`,
        data: { userId }
    });
};

export const createDm = (dm) => {
    return $.ajax({
        method: "POST",
        url: `api/direct_messages`,
        data: { dm }
    });
};
