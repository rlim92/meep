import { connect } from 'react-redux';
import ChannelShow from './channel_show';
import { fetchChannel, removeChMember, fetchUserChannels, destroyChannel } from '../../actions/channel_actions';
import { receiveMessage, fetchChannelMessages }  from '../../actions/message_actions';
import { fetchChannelMembers } from '../../actions/user_actions';
// import { fetchCurrentUser } from '../../actions/session_actions';


const mSTP = (state, ownProps) => {
    return {
        channel: state.entities.channels[ownProps.match.params.channelId],
        messages: state.entities.messages,
        users: state.entities.users,
        currentUserId: state.session.id
    };
};

const mDTP = (dispatch) => {
    return {
        fetchChannel: (id) => dispatch(fetchChannel(id)),
        receiveMessage: (id) => dispatch(receiveMessage(id)),
        fetchChannelMessages: (channelId) => dispatch(fetchChannelMessages(channelId)),
        fetchChannelMembers: (channelId) => dispatch(fetchChannelMembers(channelId)),
        removeChMember: (leaverId, chId) => dispatch(removeChMember(leaverId, chId)),
        fetchUserChannels: (userId) => dispatch(fetchUserChannels(userId)),
        destroyChannel: (chId) => dispatch(destroyChannel(chId))
    };
};

export default connect(mSTP, mDTP)(ChannelShow);