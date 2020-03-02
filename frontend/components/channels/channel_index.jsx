import React from 'react';
import ChannelIndexItem from './channel_index_item';
import CreateChannelModal from './create_channel_form_container';
import { Link } from 'react-router-dom';

class ChannelIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.fetchUserChannels(this.props.currentUser.id)
    }

    toggleChannelCreateModal(e) {
        e.stopPropagation();

        const membersModalEl = document.getElementsByClassName('channel-create-modal-outer')[0];
        if (!membersModalEl.classList.contains('active-modal')) {
            membersModalEl.classList.add('active-modal');
        } else {
            membersModalEl.classList.remove('active-modal');
        }
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
                    <img className="create-button"
                        onClick={this.toggleChannelCreateModal}
                        src="https://image.flaticon.com/icons/svg/58/58282.svg" 
                        width="15"/>
                    <CreateChannelModal />
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