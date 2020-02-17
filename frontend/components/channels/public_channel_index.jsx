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
                // <li key={[ch.id, ch.id]}>
                //     <h3>{ch.name}</h3>
                //     <button onClick={this.handleClick}>Join!</button>
                // </li>
            )
        })
        return (
            <div>
                <ul>
                    {pubChannels}
                </ul>
            </div>
        )
    }
}

export default PublicChannelIndex;