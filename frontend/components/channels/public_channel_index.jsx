import React from 'react';
import PubChItem from './pub_channel_item';

class PublicChannelIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchChannels();
    }  

    // handleClick() {
    //     debugger
    //     const { addChMember, currentUserId} = this.props;
    //     addChMember(currentUserId, channelId).then(
    //         this.props.history.push(`/home/`)
    //     );
    // }

    render() {
        const pubChannels = Object.values(this.props.channels).map( ch => {
            return (
                <PubChItem 
                    key={[ch.id, ch.id]}
                    currentUserId={this.props.currentUserId}
                    addChMember={this.props.addChMember}
                    fetchChannel={this.props.fetchChannel}
                    channel={ch}
                    history={this.props.history}
                />
            )
        })
        return (
            <div className="add-channel-container">
                <div className="add-channel-top">
                    <h3>Browse Channels</h3>
                    {/* <p>Channels you can join</p> */}
                </div>
                <div className="pub-list-container">
                    <ul className="pub-ul">
                        {pubChannels}
                    </ul>
                </div>
            </div>
        )
    }
}

export default PublicChannelIndex;