import React from 'react';
// import MessageIndex from '../messages/message_index_container';
import MessageItem from '../messages/message_item_container';
import MessageForm from '../messages/message_form';

class ChannelShow extends React.Component {

    constructor(props) {
        super(props);
        this.bottom = React.createRef();

        this.createLiveConnection = this.createLiveConnection.bind(this);

    };

    createLiveConnection() {
        if (App.currentChannel) {
            App.currentChannel.unsubscribe();
        }

        App.currentChannel = App.cable.subscriptions.create(
            { channel: "ChatChannel", 
                id: this.props.match.params.channelId,
                authorId: this.props.currentUserId
            },
            {
                received: data => {
                    switch (data.type) {
                        case 'message':
                            this.props.receiveMessage(JSON.parse(data.message));
                            break;
                    }
                },
                speak: function (data) { return this.perform('speak', data) },
                load: function () { return this.perform('load') }
            }
        );

    };

    componentDidMount() {

        const { fetchChannelMembers, fetchChannelMessages } = this.props;
        const channelId = this.props.match.params.channelId;
        this.createLiveConnection();

        fetchChannelMembers(channelId).then(()=>fetchChannelMessages(channelId));
    };

    componentDidUpdate(prevProps) {
        if (this.bottom.current) {
            this.bottom.current.scrollIntoView();
        }
        if (parseInt(this.props.match.params.channelId) !== prevProps.channel.id) {
            this.createLiveConnection();
            const channelId = this.props.match.params.channelId;
            this.props.fetchChannelMembers(channelId).then(
                this.props.fetchChannelMessages(this.props.match.params.channelId)
            )
        }
    };

    componentWillUnmount() {
        App.currentChannel.unsubscribe();
    }

    render() {
        let chatlog;
        let name;
        let memberCount = 0;

        if (this.props.channel && this.props.channel.id == this.props.match.params.channelId) {

            name = this.props.channel.name;
            memberCount = this.props.channel.member_ids.length

            chatlog = Object.values(this.props.messages).map( msg => {
                return <MessageItem 
                    key={[msg.id, msg.id]}
                    message={msg}
                />
            })
        }

        return (
            <div className="show-container">
                <div className="chatlog channel">
                    <div className="channel-top-info">
                        <div className="channel-top right">
                            <h3 className="channel-name">#{name}</h3>
                            <div className="member-list">
                                <img className="png member-icon" src="https://image.flaticon.com/icons/svg/1077/1077114.svg" width="12"/>
                                <p className="member-count">{memberCount}</p>
                            </div>
                        </div>
                        <div className="channel-top left">
                            <img className="cog" src="https://image.flaticon.com/icons/svg/2099/2099174.svg" width="20" />
                        </div>
                    </div>
                    <ul className="chatlog-ul">
                        {chatlog}
                        <div ref={this.bottom}></div>
                    </ul>
                </div>
                <div className="message-form-outer-container">
                    <MessageForm channel={this.props.channel} />
                </div>
            </div>
        );
    };
};

export default ChannelShow;