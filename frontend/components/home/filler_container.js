import React from 'react';
import { connect } from 'react-redux';
import Filler from './filler';
import { fetchMeeptown } from '../../actions/channel_actions';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        channels: state.entities.channels
    }
};

const mDTP = (dispatch) => {
    return {
        fetchMeeptown: () => dispatch(fetchMeeptown())
    };
};


export default connect(mSTP, mDTP)(Filler);