import React from 'react';


class PubChItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        const { addChMember, currentUserId, channel, fetchChannel, fetchCurrentUser } = this.props;
        addChMember(currentUserId, channel.id).then(
            () => fetchChannel(channel.id)
        ).then(
            () => this.props.history.push(`/home/channels/${channel.id}`)
        );
    };

    render() {
        const { currentUserId, channel } = this.props;
        
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