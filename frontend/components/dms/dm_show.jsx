import React from 'react';
// import MessageIndex from '../messages/message_index_container';
import MessageItem from '../messages/message_item_container';
import MessageForm from '../messages/message_form';

class DmShow extends React.Component {

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
            {
                channel: "DmChannel",
                id: this.props.match.params.dmId,
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
        const { fetchDmMembers, fetchDmMessages } = this.props;
        const dmId = this.props.match.params.dmId;

        this.createLiveConnection();

        fetchDmMembers(dmId).then(() => fetchDmMessages(dmId));
    };

    componentDidUpdate(prevProps) {
        if (this.bottom.current) {
            this.bottom.current.scrollIntoView();
        }
        if (!prevProps.dm || parseInt(this.props.match.params.dmId) !== prevProps.dm.id) {
            if (App.currentChannel) {
                App.currentChannel.unsubscribe();
            }

            if (prevProps.dm) {
                const prevCh = document.getElementById(prevProps.dm.id);
                if (prevCh && prevCh.classList.contains('current')) {
                    prevCh.classList.remove('current');
                }
            }

            this.createLiveConnection();

            const dmId = this.props.match.params.dmId;
            this.props.fetchDmMembers(dmId).then(
                this.props.fetchDmMessages(this.props.match.params.dmId)
            )
        }
    };

    componentWillUnmount() {
        App.currentChannel.unsubscribe();
    }

    // leaveChannel() {
    //     const { removeChDm, currentUserId, channel } = this.props;
    //     removeChMember(currentUserId, channel.id).then(
    //         () => this.props.history.push('/home')
    //     );
    // };

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

    // deleteChannel() {
    //     this.props.destroyChannel(this.props.channel.id).then(
    //         () => this.props.history.push('/home')
    //     );
    // };

    render() {
        let chatlog;
        let name = "DM";
        let memberCount = 0;
        let adminOptions;
        let users;


        // const currentCh = document.getElementById(this.props.match.params.channelId);
        // if (currentCh && !currentCh.classList.contains('current')) {
        //     currentCh.classList.add('current');
        // }

        if (this.props.dm && this.props.dm.id == this.props.match.params.dmId) {

            // let name = "Direct Message";
            for (let i = 0; i < this.props.dm.member_ids.length; i++) {
                if (this.props.dm.member_ids[i] !== this.props.currentUserId && this.props.users && this.props.users[this.props.dm.member_ids[i]]) {
                    // debugger
                    name = this.props.users[this.props.dm.member_ids[i]].username;
                    break;
                }
            }
            memberCount = this.props.dm.member_ids.length

            // if (this.props.dm.admin_id === this.props.currentUserId) {
            //     adminOptions = (
            //         <li
            //             className="cog-li delete"
            //             onClick={this.deleteChannel.bind(this)}>
            //             Delete #{name}
            //         </li>
            //     )
            // }

            chatlog = Object.values(this.props.messages).map(msg => {
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
                            <p className="channel-name"><strong><span className="ch-hashtag"></span>{name}</strong></p>
                            <div className="little-ch-icons">
                                <img className="star" src="https://image.flaticon.com/icons/svg/2107/2107992.svg" width="12" />
                                <span className="pipe">|</span>
                                <div className="member-list">
                                    <img className="png member-icon" src="https://image.flaticon.com/icons/svg/1250/1250689.svg" width="12" />
                                    <p className="member-count">{memberCount}</p>
                                </div>
                            </div>
                        </div>
                        <div className="channel-top left">
                            {/* <div className="outer-modal-close" onClick={this.closeCog.bind(this)}> */}
                            <div className="outer-layer-dropdown" onClick={this.closeCog.bind(this)}>
                                <div className="cog-list">
                                    <div className="cog-ul">
                                        <li
                                            className="cog-li leave"
                                            // onClick={this.leaveChannel.bind(this)}
                                            >
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
                    <MessageForm dm={this.props.dm} />
                </div>
            </div>
        );
    };
};

export default DmShow;