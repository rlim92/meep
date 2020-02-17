import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Splash from './splash';


// const mSTP = state => {
//     return {

//     }
// }

const mDTP = dispatch => {
    return {
        login: (user) => dispatch(login(user))
    }
}

export default connect(null, mDTP)(Splash);