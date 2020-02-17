import { connect } from 'react-redux';
import MessageItem from './message_item';

const mSTP = (state, ownProps) => {
    // debugger
    return {
        author: state.entities.users[ownProps.message.author_id]
    }
}

export default connect(mSTP, null)(MessageItem);