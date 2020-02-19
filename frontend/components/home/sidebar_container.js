import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { logout, fetchCurrentUser } from '../../actions/session_actions';
import { fetchUserChannels } from '../../util/channels_api_util';

const mSTP = (state) => {
    // debugger
    return {
        user: state.entities.users[state.session.id],
        currentUserId: state.session.id
    }
}

const mDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        fetchUserChannels: (id) => dispatch(fetchUserChannels(id))
    }
}


export default connect(mSTP, mDTP)(Sidebar);