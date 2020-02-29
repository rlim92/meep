import React from 'react';
import { connect } from 'react-redux';
import Filler from './filler';
import { fetchMeeptown } from '../../actions/channel_actions';
import { fetchCurrentUser } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        channels: state.entities.channels,
        currentUserId: state.session.id,
        dms: state.entities.dms
    }
};

const mDTP = (dispatch) => {
    return {
        fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id))
    };
};


export default connect(mSTP, mDTP)(Filler);