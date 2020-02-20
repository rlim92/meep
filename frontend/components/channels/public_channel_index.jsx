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

    exitBrowse(e) {
        this.props.history.push('/home')
    }

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
                    fetchCurrentUser={this.props.fetchCurrentUser}
                />
            )
        })
        return (
            <div className="add-channel-container">
                
                <div className="add-inner-container">
                    <div className="add-top-container">
                        <div className="invis-thing">
                        </div>
                        <div className="add-channel-top">
                            <h3 className="add-browse">Browse Channels</h3>
                            {/* <p>Channels you can join</p> */}
                        </div>
                        <div>
                            <img
                                className="x-button"
                                src="https://image.flaticon.com/icons/svg/2089/2089650.svg"
                                width="25"
                                height="25"
                                onClick={this.exitBrowse.bind(this)}
                            />
                        </div>
                    </div>
                    <div className="pub-list-container">
                        <p className="add-blurb">Channels you can join</p>
                        <ul className="pub-ul">
                            {pubChannels}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default PublicChannelIndex;