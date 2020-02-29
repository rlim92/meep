import {connect} from 'react-redux';
import DmForm from './dm_form';
import { createDm } from '../../actions/dm_actions';

const mSTP = (state) => {
    return {
        users: state.entities.users,
        dms: state.entities.dms,
        currentUserId: state.session.id
    }
}

const mDTP = (dispatch) => {
    return {
        createDm: (dm) => dispatch(createDm(dm))
    }
}

export default connect(mSTP, mDTP)(DmForm);