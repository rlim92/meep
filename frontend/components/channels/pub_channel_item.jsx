import React from 'react';


class PubChItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { addChMember, currentUserId, channel, fetchChannel } = this.props;
        addChMember(currentUserId, channel.id).then(
            () => fetchChannel(channel.id)
        ).then( this.props.history.push(`/home/`) );
    }

    render() {
        return (
            <li className="public-channel-item">
                <h3>{this.props.channel.name}</h3>
                <button onClick={this.handleClick}>Join!</button>
            </li>
        )
    }
};

export default PubChItem;