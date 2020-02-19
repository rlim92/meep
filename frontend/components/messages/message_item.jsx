import React from 'react';

const MessageItem = (props) => {
    if (!props.author) {
        return null;
    }

    return (
        <li className="message">
            <h3 className="message-author"><strong>{props.author.username}</strong> <span>{props.message.created_at.slice(11,16)}</span></h3>
            <p className="message-msg">{props.message.text}</p>
        </li>
    )
};

export default MessageItem;