import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';

const mSTP = (state) => {
    return {
        session: {
            username: "",
            email: "",
            password: ""
        },
        errors: state.errors.session,
        formType: "Sign up"
    }
}

const mDTP = (dispatch) => {
    return {
        action: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mSTP, mDTP)(SessionForm);