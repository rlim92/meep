import React from 'react';
// import MessageIndex from '../messages/message_index_container';
import MessageItem from '../messages/message_item_container';
import MessageForm from '../messages/message_form';
import { Link } from 'react-router-dom';

class ChannelShow extends React.Component {

    constructor(props) {
        super(props);
        this.bottom = React.createRef();

        this.createLiveConnection = this.createLiveConnection.bind(this);
    };

    createLiveConnection() {
        // if (App.currentChannel) {
        //     App.currentChannel.unsubscribe();
        // }

        App.currentChannel = App.cable.subscriptions.create(
            { 
                channel: "ChatChannel", 
                id: parseInt(this.props.match.params.channelId),
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
        if (!prevProps.channel || parseInt(this.props.match.params.channelId) !== prevProps.channel.id) {
            if (App.currentChannel) {
                App.currentChannel.unsubscribe();
            }

            if (prevProps.channel) {
                const prevCh = document.getElementById(prevProps.channel.id);
                if (prevCh && prevCh.classList.contains('current')) {
                    prevCh.classList.remove('current');
                } 
            }

            this.createLiveConnection();

            const channelId = this.props.match.params.channelId;
            this.props.fetchChannelMembers(channelId).then(
                () => this.props.fetchChannelMessages(this.props.match.params.channelId)
            )
        }
        // this.createLiveConnection();
    };

    componentWillUnmount() {
        // debugger;
        const currentCh = document.getElementById(this.props.match.params.channelId);
        if (currentCh && currentCh.classList.contains('current')) {
            currentCh.classList.remove('current');
        }

        // if (App.currentChannel) {
        //     App.currentChannel.unsubscribe();
        // }
    }

    leaveChannel() {
        const { removeChMember, currentUserId, channel } = this.props;
        removeChMember(currentUserId, channel.id).then(
            () => this.props.history.push('/home')
        );
    };

    coggle(e) {
        e.stopPropagation();

        const cogList = document.getElementsByClassName('cog-list')[0];
        const outerDiv = document.getElementsByClassName('outer-layer-dropdown')[0];
        
        if (cogList.classList.contains('active')) {
            cogList.classList.remove('active');
            outerDiv.classList.remove('active');
        } else {
            cogList.classList.add('active');
            outerDiv.classList.add('active');
        }
    };

    closeCog(e) {
        e.stopPropagation();

        const cogList = document.getElementsByClassName('cog-list')[0];
        const outerDiv = document.getElementsByClassName('outer-layer-dropdown')[0];

        if (cogList.classList.contains('active') && outerDiv.classList.contains('active')) {
            cogList.classList.remove('active');
            outerDiv.classList.remove('active');
        }
    }

    deleteChannel() {
        this.props.destroyChannel(this.props.channel.id).then(
            () => this.props.history.push('/home')
        );
    };

    // getMsgTime(date) {
    //     const obj = new Date(date);
    //     const fullHours = obj.getHours();
    //     let hours = fullHours % 12;
    //     if (hours === 0) hours = 12;
    //     const minutes = obj.getMinutes();
    //     const tmp = `0${minutes}`;
    //     const paddedMinutes = tmp.slice(tmp.length - 2);
    //     const ampm = fullHours < 12 || fullHours === 0 ? 'am' : 'pm';
    //     return `${hours}:${paddedMinutes}${ampm}`;
    // };

    render() {
        let chatlog;
        let name;
        let memberCount = 0;
        let adminOptions;
        let publicAdd;

        const currentCh = document.getElementById(this.props.match.params.channelId);
        if (currentCh && !currentCh.classList.contains('current')) {
            currentCh.classList.add('current');
        } 

        if (this.props.channel && this.props.channel.id == this.props.match.params.channelId) {

            name = this.props.channel.name;
            memberCount = this.props.channel.member_ids.length

            if (!this.props.channel.is_private || this.props.channel.admin_id === this.props.currentUserId) {
                publicAdd = (
                    <Link to={`/home/channels/${this.props.channel.id}/add`}
                        className="ch-add-link">
                        <li
                            className="cog-li add"
                        // onClick={this.deleteChannel.bind(this)}
                        >
                            Add people to channel
                        </li>
                    </Link>
                )
            }

            if (this.props.channel.admin_id === this.props.currentUserId) {
                adminOptions = (
                    <li
                        className="cog-li delete"
                        onClick={this.deleteChannel.bind(this)}>
                        Delete #{name}
                    </li>
                )
            }

            chatlog = Object.values(this.props.messages).map( (msg, idx) => {
                let prev;
                if (idx > 0) {
                    prev = Object.values(this.props.messages)[idx - 1];
                }
                // debugger;
                return (<MessageItem 
                    key={`msg-${msg.id}`}
                    message={msg}
                    prev={prev}
                />)
            })
        }

        return (
            <div className="show-container">
                <div className="chatlog channel">
                    <div className="channel-top-info">
                        <div className="channel-top right">
                            <p className="channel-name">
                                <strong><span className="ch-hashtag">#</span>{name}</strong>
                            </p>
                            <div className="little-ch-icons">
                                <img 
                                    className="star" 
                                    src={star}
                                    // src="https://image.flaticon.com/icons/svg/2107/2107992.svg" 
                                    width="12" 
                                    height="12"
                                    />
                                <span className="pipe">|</span>
                                <div className="member-list">
                                    <img 
                                        className="png member-icon" 
                                        src={person}
                                        // src="https://image.flaticon.com/icons/svg/1250/1250689.svg" 
                                        width="12"
                                        height="12"
                                        />
                                    <p className="member-count">{memberCount}</p>
                                </div>
                                <span className="pipe pipe-two">|</span>
                                <div className="member-list tack-hover">
                                    <img
                                        className="star tack"
                                        src={tack}
                                        width="12"
                                        height="12"
                                    />
                                    <p className="tack-count">0</p>
                                </div>
                                <span className="pipe pipe-three">|</span>
                                <div className="add-description-div">
                                    <img
                                        className="star pen"
                                        src={pen}
                                        width="12"
                                        height="12"
                                    />
                                    <p className="member-count add-desc">Add a description</p>
                                </div>
                            </div>
                        </div>
                        <div className="channel-top left">
                            {/* <div className="outer-modal-close" onClick={this.closeCog.bind(this)}> */}
                            <div className="outer-layer-dropdown" onClick={this.closeCog.bind(this)}>
                                <div className="cog-list"> 
                                    <div className="cog-ul">
                                        {publicAdd}
                                        <li
                                            className="cog-li leave"
                                            onClick={this.leaveChannel.bind(this)}>
                                            Leave #{name}
                                        </li>
                                        {adminOptions}   
                                    </div>
                                </div>
                            </div>
                            <img className="cog" onClick={this.coggle.bind(this)} src="https://image.flaticon.com/icons/svg/2099/2099058.svg" width="20" />
                        </div>
                    </div>
                    <ul className="chatlog-ul">
                        {chatlog}
                        <div ref={this.bottom}></div>
                    </ul>
                </div>
                <div className="message-form-outer-container">
                    <MessageForm 
                        channel={this.props.channel} 
                        currentUserId={this.props.currentUserId}
                        receiveMessage={this.props.receiveMessage}
                    />
                </div>
            </div>
        );
    };
};

export default ChannelShow;