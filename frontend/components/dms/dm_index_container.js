import { connect } from 'react-redux';
import DmIndex from './dm_index';
import { fetchUserDms } from '../../actions/dm_actions';
import { fetchCurrentUser } from '../../actions/session_actions';
import { fetchDmMembers, fetchUserDmMembers } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
    // debugger;
    return {
        currentUser: state.entities.users[state.session.id],
        dms: state.entities.dms,
        users: state.entities.users,
        currentUserId: state.session.id
    };
};

const mDTP = (dispatch) => {
    return {
        fetchUserDms: (dmIds) => dispatch(fetchUserDms(dmIds)),
        fetchDmMembers: (dmId) => dispatch(fetchDmMembers(dmId)),
        fetchUserDmMembers: (id) => dispatch(fetchUserDmMembers(id)),
        fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId))
    };  
};

export default connect(mSTP, mDTP)(DmIndex);