import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { Link } from 'react-router-dom';

class ChannelIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.fetchUserChannels(this.props.currentUser.id)
    }

    render() {
        // debugger
        let currentChId;
        if (this.props.match) {
            // debugger
            currentChId = this.props.match.params.channelId
        }
        const channelItemLis = Object.values(this.props.channels).map( ch => {
            return (
                <ChannelIndexItem 
                    key={[ch.id, ch.id]}
                    channel={ch}
                    currentChId={currentChId}
                />
            )
        })

        return (
            <div className="channels-index">
                <div className="title-and-create">
                    <Link className="title-browse" to="/home/channels/">
                        <h3 className="channels-header">Channels</h3>
                    </Link>
                    <Link className="create-link" to="/home/channels/create">
                        <img className="create-button" src="https://image.flaticon.com/icons/svg/58/58282.svg" width="15"/>
                    </Link>
                </div>
                <ul className="channels-ul">
                    {channelItemLis}
                    <li>
                    </li>
                    <Link to="/home/channels/">
                        <li className="channel-li add-ch">
                            <span className="hashtag">+</span> Add a channel
                        </li>
                    </Link>
                </ul>
            </div>
        );
    };
};

export default ChannelIndex;