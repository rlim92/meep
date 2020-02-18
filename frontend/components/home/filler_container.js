import React from 'react';
import { connect } from 'react-redux';
import Filler from './filler';

// import ChannelShow from '../channels/channel_show'
// import { fetchChannel } from '../../actions/channel_actions';
// import { receiveMessage, fetchChannelMessages } from '../../actions/message_actions';
// import { fetchChannelMembers } from '../../actions/user_actions';

// const mSTP = (state, ownProps) => {
//     const globalChannel = state.entities.channels[state.entities.users[state.session.id].channel_ids[0]]
//     return {
//         channel: globalChannel,
//         messages: state.entities.messages,
//         currentUserId: state.session.id
//     };
// };

// const mDTP = (dispatch) => {
//     return {
//         fetchChannel: (id) => dispatch(fetchChannel(id)),
//         receiveMessage: (id) => dispatch(receiveMessage(id)),
//         fetchChannelMessages: (channelId) => dispatch(fetchChannelMessages(channelId)),
//         fetchChannelMembers: (channelId) => dispatch(fetchChannelMembers(channelId))
//     };
// };


export default connect(null, null)(Filler);