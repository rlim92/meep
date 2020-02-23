import {connect} from 'react-redux';
import DmForm from './dm_form';

const mSTP = (state) => {
    return {
        users: state.entities.users,
        dms: state.entities.dms,
        currentUserId: state.session.id
    }
}

const mDTP = (dispatch) => {
    return {

    }
}

export default connect(mSTP, mDTP)(DmForm);