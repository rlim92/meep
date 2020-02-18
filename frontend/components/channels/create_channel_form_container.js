import { connect } from 'react-redux';
import ChannelForm from './channel_form';
import { createChannel } from '../../actions/channel_actions';

const mSTP = (state, ownProps) => {
    return {
        channel: {
            name: "",
            description: "",
            is_private: false
        },
        formType: 'Create'
    }
}

const mDTP = dispatch => {
    return {
        action: (channel) => dispatch(createChannel(channel))
    }
}

export default connect(mSTP, mDTP)(ChannelForm);