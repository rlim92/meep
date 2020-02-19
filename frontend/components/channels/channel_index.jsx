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
        const channelItemLis = Object.values(this.props.channels).map( ch => {
            return (
                <ChannelIndexItem 
                    key={[ch.id, ch.id]}
                    channel={ch}
                />
            )
        })

        return (
            <div className="channels-index">
                <div className="title-and-create">
                    <h3 className="channels-header">Channels</h3>
                    <Link className="create-link" to="/home/channels/create">
                        <img className="create-button" src="https://image.flaticon.com/icons/svg/58/58282.svg" width="15"/>
                    </Link>
                </div>
                <ul className="channels-ul">
                    {channelItemLis}
                    <li>
                    </li>
                    <li className="channel-li add-ch">
                        <Link to="/home/channels">+ Add a channel</Link>
                    </li>
                </ul>
            </div>
        );
    };
};

export default ChannelIndex;