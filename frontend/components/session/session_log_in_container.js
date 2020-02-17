import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';

const mSTP = (state) => {
    return {
        session: {
            email: "",
            password: ""
        },
        errors: state.errors.session,
        formType: "Log in"
    }
}

const mDTP = (dispatch) => {
    return {
        action: (user) => dispatch(login(user)),
        login: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mSTP, mDTP)(SessionForm);