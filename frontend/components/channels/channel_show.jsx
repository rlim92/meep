import React from 'react';
// import MessageIndex from '../messages/message_index_container';
import MessageItem from '../messages/message_item_container';
import MessageForm from '../messages/message_form';
import { Link } from 'react-router-dom';

class ChannelShow extends React.Component {

    constructor(props) {
        super(props);

        this.bottom = React.createRef();

        if (this.props.channel) {
            this.state = { is_starred: this.props.channel.is_starred }
        } else {
            this.state = { is_starred: false }
        }

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

        const solidStar = document.getElementsByClassName('solid-star')[0];
        const starStar = document.getElementsByClassName('star-star')[0];
        // debugger;
        if (this.props.channel && this.props.channel.is_starred) {
            debugger
            if (!solidStar.classList.contains('active') && !starStar.classList.contains('hidden')) {
                debugger;
                solidStar.classList.add('active');
                starStar.classList.add('hidden');
            }
        } else if (this.props.channel && !this.props.channel.is_starred) {
            if (solidStar.classList.contains('active') && starStar.classList.contains('hidden')) {
                solidStar.classList.remove('active');
                starStar.classList.remove('hidden');
            }
        }

        this.createLiveConnection();

        fetchChannelMembers(channelId).then(()=>fetchChannelMessages(channelId));
    };

    componentDidUpdate(prevProps) {

        const solidStar = document.getElementsByClassName('solid-star')[0];
        const starStar = document.getElementsByClassName('star-star')[0];
        // debugger;
        if (this.props.channel && this.props.channel.is_starred) {
            // debugger
            if (!solidStar.classList.contains('active') && !starStar.classList.contains('hidden')) {
                // debugger;
                solidStar.classList.add('active');
                starStar.classList.add('hidden');
            }
        } else if (this.props.channel && !this.props.channel.is_starred) {
            if (solidStar.classList.contains('active') && starStar.classList.contains('hidden')) {
                solidStar.classList.remove('active');
                starStar.classList.remove('hidden');
            }
        }
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

    profPic(user) {
        if (user.username === "rich") {
            return (
                <img
                    className="profile-icon"
                    src={richIcon}
                    width="36"
                    height="36"
                />
            )
        } else if (user.username === "DemoUser") {
            return (
                <img
                    className="profile-icon"
                    src={blackIcon}
                    width="36"
                    height="36"
                />
            )
        } else {
            switch (user.id % 5) {
                case 0:
                    return (
                        <img
                            className="profile-icon"
                            src={blackIcon}
                            width="36"
                            height="36"
                        />
                    )
                case 1:
                    return (
                        <img
                            className="profile-icon"
                            src={redIcon}
                            width="36"
                            height="36"
                        />
                    )
                case 2:
                    return (
                        <img
                            className="profile-icon"
                            src={blueIcon}
                            width="36"
                            height="36"
                        />
                    )
                case 3:
                    return (
                        <img
                            className="profile-icon"
                            src={yellowIcon}
                            width="36"
                            height="36"
                        />
                    )
                case 4:
                    return (
                        <img
                            className="profile-icon"
                            src={greenIcon}
                            width="36"
                            height="36"
                        />
                    )
            }
        }
    }

    toggleMembersModal(e) {
        e.stopPropagation();

        const membersModalEl = document.getElementsByClassName('members-modal-outer')[0];
        if (!membersModalEl.classList.contains('active-modal')) {
            membersModalEl.classList.add('active-modal');
        } else {
            membersModalEl.classList.remove('active-modal');
        }
    }

    togglePinnedModal(e) {
        e.stopPropagation();

        // debugger;
        const membersModalEl = document.getElementsByClassName('pinned-modal-outer')[0];
        if (!membersModalEl.classList.contains('active-modal')) {
            membersModalEl.classList.add('active-modal');
        } else {
            membersModalEl.classList.remove('active-modal');
        }
    }

    toggleDescModal(e) {
        if (e) {
            e.stopPropagation();
        }

        // debugger;
        const membersModalEl = document.getElementsByClassName('channel-desc-modal-outer')[0];
        if (!membersModalEl.classList.contains('active-modal')) {
            membersModalEl.classList.add('active-modal');
        } else {
            membersModalEl.classList.remove('active-modal');
        }
    }


    //TODO: make is_starred column in channels, tie column to state
    // ajax request for update on click
    // setState to true/false ? maybe
    
    // similarly, ajax request for description update on click for "Add a topic"

    toggleStar(e) {
        // e.stopPropagation();

        if (e.target.classList.contains('star-star')) {
            const channel = { id: this.props.channel.id, is_starred: true }
            this.props.updateChStar(channel)
        } else if (e.target.classList.contains('solid-star')) {
            const channel = { id: this.props.channel.id, is_starred: false }
            this.props.updateChStar(channel)
        }
    }

    editDesc(e) {
        // e.preventDefault();
        if (e.target.classList.contains('desc-input') && e.keyCode === 13) {
            const channel = { id: this.props.channel.id, description: e.target.value }
            this.props.updateChStar(channel).then(()=>this.toggleDescModal());
            e.target.value = "";
        } else if (!e.target.classList.contains('desc-input') ) {
            const desc = document.getElementsByClassName('desc-input')[0].value;
            const channel = { id: this.props.channel.id, description: desc }
            this.props.updateChStar(channel).then(()=>this.toggleDescModal());
            document.getElementsByClassName('desc-input')[0].value = "";
        }
    }

    render() {
        let chatlog;
        let name;
        let memberCount = 0;
        let members;
        let adminOptions;
        let publicAdd;
        let pinnedMessages = [];
        let addDesc = "Add a description";

        const currentCh = document.getElementById(this.props.match.params.channelId);
        if (currentCh && !currentCh.classList.contains('current')) {
            currentCh.classList.add('current');
        } 

        if (this.props.channel && this.props.channel.id == this.props.match.params.channelId) {

            name = this.props.channel.name;
            memberCount = this.props.channel.member_ids.length;
            addDesc = this.props.channel.description;

            members = this.props.channel.member_ids.map( memId => {
                if (this.props.users && this.props.users[memId]) {
                    return (
                        <li
                            key={`member-count-item-${memId}`}
                            className="pub-li user-to-add-li mem-item">
                            {this.profPic(this.props.users[memId])}
                            <h3 className="pub-channel-name user-ch-name mem-item-name">{this.props.users[memId].username}</h3>
                        </li>
                    )
                }
            })



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

                if (msg.is_pinned) {
                    pinnedMessages.push(
                        <MessageItem
                            key={`msg-${msg.id}`}
                            message={msg}
                            // prev={prev}
                        />
                    )
                }

                // debugger;
                return (<MessageItem 
                    key={`msg-${msg.id}`}
                    message={msg}
                    prev={prev}
                />)
            })
        }


        // testing modal
        const membersModal = (
            <div className="channel-form-container members-modal-outer" onClick={this.toggleMembersModal.bind(this)}>
                <div className="channel-form members-modal" onClick={(e) => e.stopPropagation()}>
                    <div className="members-modal-header">
                        <h3 className="add-browse member-list-h3">{memberCount} Members in #{name}</h3>
                        <img
                            className="x-button modal-x-mems"
                            src="https://image.flaticon.com/icons/svg/2089/2089650.svg"
                            onClick={this.toggleMembersModal.bind(this)}
                        />
                    </div>
                    <ul className="member-list-ul">
                        {members}
                    </ul>
                </div>
            </div>
        )

        const pinnedModal = (
            <div className="channel-form-container pinned-modal-outer" onClick={this.togglePinnedModal.bind(this)}>
                <div className="channel-form pinned-modal" onClick={(e) => e.stopPropagation()}>
                    <div className="members-modal-header">
                        <h3 className="add-browse member-list-h3">{pinnedMessages.length} Pinned messages in #{name}</h3>
                        <img
                            className="x-button modal-x-mems"
                            src="https://image.flaticon.com/icons/svg/2089/2089650.svg"
                            onClick={this.togglePinnedModal.bind(this)}
                        />
                    </div>
                    <ul className="member-list-ul">
                        {pinnedMessages}
                    </ul>
                </div>
            </div>
        )

        const descriptionModal = (
            <div className="channel-form-container channel-desc-modal-outer" onClick={this.toggleDescModal}>
                <div className="channel-form desc-form" onClick={(e) => e.stopPropagation()} >
                    <div className="create-header desc-header">
                        <h2 className="create-title desc-title">Edit channel description</h2>
                        <img
                            className="x-button desc-x-button"
                            src="https://image.flaticon.com/icons/svg/2089/2089650.svg"
                            // width="25" 
                            // height="25"
                            onClick={this.toggleDescModal.bind(this)}
                        />
                    </div>
                    <div className="create-bottom desc-bottom">
                        <input
                            className="create-input description desc-input"
                            type="text"
                            onKeyDown={this.editDesc.bind(this)}
                            // value={this.state.description}
                            // onChange={this.update('description')}
                        />
                        <div className="button-desc-div">
                            <button className="form-button desc-cancel" onClick={this.toggleDescModal.bind(this)}>Cancel</button>
                            <button className="form-button desc-button" onClick={this.editDesc.bind(this)}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        )

        const starred = (
            <img 
                className="star solid-star" 
                src="https://image.flaticon.com/icons/svg/1828/1828961.svg" 
                width="12"
                height="12"
                onClick={this.toggleStar.bind(this)}
                />
        )






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
                                    className="star star-star" 
                                    src={star}
                                    // src="https://image.flaticon.com/icons/svg/2107/2107992.svg" 
                                    width="12" 
                                    height="12"
                                    onClick={this.toggleStar.bind(this)}
                                    />
                                {starred}
                                <span className="pipe">|</span>
                                <div className="member-list" onClick={this.toggleMembersModal.bind(this)}>
                                    {membersModal}
                                    <img 
                                        className="png member-icon" 
                                        // src={person}
                                        src={personIcon}
                                        // src="https://image.flaticon.com/icons/svg/1250/1250689.svg" 
                                        width="12"
                                        height="12"
                                        />
                                    <p className="member-count">{memberCount}</p>
                                </div>
                                <span className="pipe pipe-two">|</span>
                                <div className="member-list tack-hover" onClick={this.togglePinnedModal.bind(this)}>
                                    {pinnedModal}
                                    <img
                                        className="star tack"
                                        src={tack}
                                        width="12"
                                        height="12"
                                    />
                                    <p className="tack-count">0</p>
                                </div>
                                <span className="pipe pipe-three">|</span>
                                <div className="add-description-div" onClick={this.toggleDescModal.bind(this)}>
                                    {descriptionModal}
                                    <img
                                        className="star pen"
                                        src={pen}
                                        width="12"
                                        height="12"
                                    />
                                    <p className="member-count add-desc">{addDesc}</p>
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
                        <div className="bottom-chat" ref={this.bottom}></div>
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