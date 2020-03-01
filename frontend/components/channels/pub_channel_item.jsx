import React from 'react';


class PubChItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        const { addChMember, currentUserId, channel, fetchChannel, userToAdd, userFromDm } = this.props;
        
        if (userToAdd) {
            addChMember(userToAdd.id, channel.id).then(
                () => fetchChannel(channel.id)
            ).then(
                () => this.props.history.push(`/home/channels/${channel.id}`)
            );
        } else if (userFromDm) {
            addChMember(userFromDm.id, channel.id).then(
                () => fetchChannel(channel.id)
            ).then(
                () => this.props.history.push(`/home/channels/${channel.id}`)
            );
        } else {
            addChMember(currentUserId, channel.id).then(
                () => fetchChannel(channel.id)
            ).then(
                () => this.props.history.push(`/home/channels/${channel.id}`)
            );
        }
        
        
    };

    render() {
        const { currentUserId, channel, userToAdd, userFromDm } = this.props;
        if (userToAdd){
            if (channel.member_ids.includes(userToAdd.id)) {
                return null;
            } else {
                let profPic = (userId) => {switch (userId % 5) {
                    case 0:
                        return (
                            <img
                                className="profile-icon"
                                src={blackIcon}
                                width="36"
                                height="36"
                            />
                        )
                    case 1:
                        return (
                            <img
                                className="profile-icon"
                                src={redIcon}
                                width="36"
                                height="36"
                            />
                        )
                    case 2:
                        return (
                            <img
                                className="profile-icon"
                                src={blueIcon}
                                width="36"
                                height="36"
                            />
                        )
                    case 3:
                        return (
                            <img
                                className="profile-icon"
                                src={yellowIcon}
                                width="36"
                                height="36"
                            />
                        )
                    case 4:
                        return (
                            <img
                                className="profile-icon"
                                src={greenIcon}
                                width="36"
                                height="36"
                            />
                        )
                }}
                if (userToAdd.username === "rich") {
                    profPic = () => {
                        return (
                            <img
                                className="profile-icon"
                                src={richIcon}
                                width="36"
                                height="36"
                            />
                        ) 
                    }
                } else if (userToAdd.username === "DemoUser") {
                    profPic = () => {
                        return (
                            <img
                                className="profile-icon"
                                src={blackIcon}
                                width="36"
                                height="36"
                            />
                        )
                    }
                }
                return (<li
                    className="pub-li user-to-add-li"
                    onClick={this.handleClick}>
                    {profPic(userToAdd.id)}
                    <h3 className="pub-channel-name user-ch-name">{userToAdd.username}</h3>
                </li>)
            }
        }

        if (userFromDm) {
            return (<li
                className="pub-li"
                onClick={this.handleClick}>
                <h3 className="pub-channel-name">#{channel.name}</h3>
                {/* <p>Created by {channel.admin}</p> */}
            </li>)
        }
        
        if (channel.member_ids.includes(currentUserId)) {
            return null;
        }

        return (
            <li
                className="pub-li"
                onClick={this.handleClick}>
                <h3 className="pub-channel-name">#{channel.name}</h3>
            </li>
        )
    }
};

export default PubChItem;