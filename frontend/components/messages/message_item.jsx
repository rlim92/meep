import React from 'react';

const MessageItem = (props) => {
    let author;
    if (props.author) {
        author = props.author.username
    } else {
        author = props.message.author_name
    }
    
    const time = date => {
        const obj = new Date(date);
        const fullHours = obj.getHours();
        let hours = fullHours % 12;
        if (hours === 0) hours = 12;
        const minutes = obj.getMinutes();
        const tmp = `0${minutes}`;
        const paddedMinutes = tmp.slice(tmp.length - 2);
        const ampm = fullHours < 12 || fullHours === 0 ? 'am' : 'pm';
        return `${hours}:${paddedMinutes}${ampm}`;
    };

    return (
        <li className="message">
            <div className="icon-div">
                <img className="profile-icon" src="https://ca.slack-edge.com/T03GU501J-UMKP3S7CK-ga0c36747e0e-48" width="36"/>
            </div>
            <div className="message-div">
                <h3 className="message-author"><strong>{author}</strong> <span>{time(props.message.created_at)}</span></h3>
                <p className="message-msg">{props.message.text}</p>
            </div>
        </li>
    )
};

export default MessageItem;