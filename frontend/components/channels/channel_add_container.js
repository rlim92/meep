import { connect } from 'react-redux';
import ChannelAdd from './channel_add';
import { fetchUserChannels, addChMember, fetchChannel } from '../../actions/channel_actions'
import { fetchCurrentUser } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    return {
        users: state.entities.users,
        channel: state.entities.channels[ownProps.match.params.channelId],
        currentUserId: state.session.id
    }
}

const mDTP = dispatch => {
    return {
        addChMember: (userId, channelId) => dispatch(addChMember(userId, channelId)),
        fetchChannel: (id) => dispatch(fetchChannel(id)),
        fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id))
    }
}

export default connect(mSTP, mDTP)(ChannelAdd);