import React from 'react';
import PubChItem from './pub_channel_item';

class ChannelAdd extends React.Component {
    constructor(props) {
        super(props);

    }


    exitBrowse(e) {
        // debugger;
        // console.log(this.props);
        this.props.history.push('/home');
    }

    render() {
        const newMembers = Object.values(this.props.users).map(user => {
            return (
                <PubChItem
                    key={`user-to-add-${user.id}`}
                    userToAdd={user}
                    currentUserId={this.props.currentUserId}
                    addChMember={this.props.addChMember}
                    fetchChannel={this.props.fetchChannel}
                    channel={this.props.channel}
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
                            <h3 className="add-browse">Add People</h3>
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
                        <p className="add-blurb">{`#${this.props.channel.name}`}</p>
                        <ul className="pub-ul">
                            {newMembers}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChannelAdd;