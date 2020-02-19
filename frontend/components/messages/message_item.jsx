import React from 'react';

const MessageItem = (props) => {
    let author;
    if (props.author) {
        author = props.author.username
    } else {
        author = props.message.author_name
    }
    return (
        <li className="message">
            <h3 className="message-author"><strong>{author}</strong> <span>{props.message.created_at.slice(11,16)}</span></h3>
            <p className="message-msg">{props.message.text}</p>
        </li>
    )
};

export default MessageItem;