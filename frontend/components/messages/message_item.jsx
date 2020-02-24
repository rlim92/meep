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

    let img;
    let createdAt = time(props.message.created_at);
    let authorEl = (
        <h3 className="message-author">
            <strong>{author}</strong> <span className="clock">{createdAt}</span>
        </h3>
    )

    if (props.prev && time(props.prev.created_at) === createdAt && props.prev.author_id === props.message.author_id) {
        debugger
        img = (
            <img
                className="profile-icon"            
                width="36"
            />
        )
        createdAt = "";
        authorEl = "";
    } else {
        img = (
            <img 
                className="profile-icon" 
                src="https://ca.slack-edge.com/T03GU501J-UMKP3S7CK-ga0c36747e0e-48" 
                width="36"
            />
        )
    }


    return (
        <li className="message">
            <div className="icon-div">
                {/* <img className="profile-icon" src="https://ca.slack-edge.com/T03GU501J-UMKP3S7CK-ga0c36747e0e-48" width="36"/> */}
                {img}
            </div>
            <div className="message-div">
                {/* <h3 className="message-author">
                    <strong>{author}</strong> <span className="clock">{createdAt}</span>
                </h3> */}
                {authorEl}
                <p className="message-msg">{props.message.text}</p>
            </div>
        </li>
    )
};

export default MessageItem;