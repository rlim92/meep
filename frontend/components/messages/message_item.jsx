import React from 'react';

const MessageItem = (props) => {
    let author;
    if (props.author) {
        author = props.author.username
    } else {
        author = props.message.author_name
    }

    const red = window.redIcon;
    const blue = window.blueIcon;
    const yellow = window.yellowIcon;
    const green = window.greenIcon;
    const black = window.blackIcon;
    
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
        // debugger
        img = (
            <img
                className="profile-icon"            
                width="36"
            />
        )
        createdAt = "";
        authorEl = "";
    } else if (author === "DemoUser") {
        img = (
            <img
                className="profile-icon"
                src={blackIcon}
                width="36"
                height="36"
            />
        )
    } else if (author === 'rich') {
        img = (
            <img
                className="profile-icon"
                src={richIcon}
                width="36"
                height="36"
            />
        )
    } else {
        switch (props.message.author_id % 5) {
            case 0:
                img = (
                    <img 
                        className="profile-icon" 
                        src={blackIcon}
                        width="36"
                        height="36"
                    />
                )
                break;
            case 1:
                img = (
                    <img
                        className="profile-icon"
                        src={redIcon}
                        width="36"
                        height="36"
                    />
                )
                break;
            case 2:
                img = (
                    <img
                        className="profile-icon"
                        src={blueIcon}
                        width="36"
                        height="36"
                    />
                )
                break;
            case 3:
                img = (
                    <img
                        className="profile-icon"
                        src={yellowIcon}
                        width="36"
                        height="36"
                    />
                )
                break;
            case 4:
                img = (
                    <img
                        className="profile-icon"
                        src={greenIcon}
                        width="36"
                        height="36"
                    />
                )
                break;
        }
    }

    return (
        <li className="message">
            <div className="icon-div">
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