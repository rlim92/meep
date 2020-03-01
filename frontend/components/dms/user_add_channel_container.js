import { connect } from 'react-redux';
import PublicChannelIndex from '../channels/public_channel_index';
import { fetchUserChannels, addChMember, fetchChannel } from '../../actions/channel_actions'
import { fetchCurrentUser } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    return {
        channels: state.entities.channels,
        currentUserId: state.session.id,
        userFromDm: state.entities.users[ownProps.match.params.userId]
    }
}

const mDTP = dispatch => {
    return {
        fetchChannels: () => dispatch(fetchUserChannels()),
        addChMember: (userId, channelId) => dispatch(addChMember(userId, channelId)),
        fetchChannel: (id) => dispatch(fetchChannel(id)),
        fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id))
    }
}

export default connect(mSTP, mDTP)(PublicChannelIndex);