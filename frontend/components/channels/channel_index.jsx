import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { Link } from 'react-router-dom';

class ChannelIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserChannels(this.props.currentUser.id)
    }

    render() {
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
                        {/* https://image.flaticon.com/icons/png/512/1890/1890636.png */}
                        <img src="https://image.flaticon.com/icons/svg/983/983901.svg" width="20"/>
                    </Link>
                </div>
                <ul className="channels-ul">
                    {channelItemLis}
                </ul>
                <Link to="/home/channels">+ Add a channel</Link>
            </div>
        );
    };
};

export default ChannelIndex;