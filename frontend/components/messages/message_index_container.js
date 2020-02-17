import { connect } from 'react-redux';
import MessageIndex from './message_index'
// import { fetchMessages } from '../../actions/message_actions';
import { fetchMessages } from '../../actions/message_actions';
const mSTP = (state, ownProps) => {
    let messageIds;
    // debugger
    if (ownProps.channel) {
        messageIds = ownProps.channel.message_ids
    } 
    // else {
        // messageIds = state.entities.direct_messages[ownProps.match.params.channelId].messageIds
    // }
    return {
        messages: state.entities.messages,
        messageIds
    };
};

const mDTP = dispatch => {
    // debugger
    return {
        fetchMessages: (messageIds) => dispatch(fetchMessages(messageIds))
    };
};


export default connect(mSTP, mDTP)(MessageIndex);