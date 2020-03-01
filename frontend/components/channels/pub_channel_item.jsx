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
                return (<li
                    className="pub-li"
                    onClick={this.handleClick}>
                    <h3 className="pub-channel-name">{userToAdd.username}</h3>
                </li>)
            }
        }

        if (userFromDm) {
            return (<li
                className="pub-li"
                onClick={this.handleClick}>
                <h3 className="pub-channel-name">#{channel.name}</h3>
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