import { connect } from 'react-redux';
import DmShow from './dm_show';
import { fetchDm, fetchUserDms } from '../../actions/dm_actions';
import { receiveMessage, fetchDmMessages } from '../../actions/message_actions';
import { fetchDmMembers } from '../../actions/user_actions';
// import { fetchCurrentUser } from '../../actions/session_actions';


const mSTP = (state, ownProps) => {
    return {
        dm: state.entities.dms[ownProps.match.params.dmId],
        messages: state.entities.messages,
        currentUserId: state.session.id,
        users: state.entities.users
    };
};

const mDTP = (dispatch) => {
    return {
        fetchDm: (id) => dispatch(fetchDm(id)),
        receiveMessage: (id) => dispatch(receiveMessage(id)),
        fetchDmMessages: (dmId) => dispatch(fetchDmMessages(dmId)),
        fetchDmMembers: (dmId) => dispatch(fetchDmMembers(dmId)),
        fetchUserDms: (userId) => dispatch(fetchUserDms(userId))
    };
};

export default connect(mSTP, mDTP)(DmShow);