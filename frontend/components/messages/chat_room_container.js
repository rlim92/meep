import { connect } from 'react-redux';
import ChatRoom from './chat_room';
import { receiveSomeMessages } from '../../actions/message_actions';

const mSTP = (state) => {
    return {
        messages: state.entities.messages
    }
}

const mDTP = (dispatch) => {
    return {
        addMessage: (msg) => dispatch(addMessage(msg)),
        setMessage: (msg) => dispatch(setMessage(msg))
    }
}

export default connect(mSTP, mDTP)(ChatRoom);