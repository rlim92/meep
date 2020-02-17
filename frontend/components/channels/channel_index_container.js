import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { fetchUserChannels } from '../../actions/channel_actions';

const mSTP = (state) => {
    // debugger;
    return {
        currentUser: state.entities.users[state.session.id],
        channels: state.entities.channels
    };
};

const mDTP = (dispatch) => {
    return {
        fetchUserChannels: (channelIds) => dispatch(fetchUserChannels(channelIds))
    };
};

export default connect(mSTP, mDTP)(ChannelIndex);