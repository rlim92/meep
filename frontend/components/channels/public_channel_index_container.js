import { connect } from 'react-redux';
import PublicChannelIndex from './public_channel_index';
import { fetchUserChannels, addChMember, fetchChannel } from '../../actions/channel_actions'
import { fetchCurrentUser } from '../../actions/session_actions';

const mSTP = state => {
    return {
        channels: state.entities.channels,
        currentUserId: state.session.id
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