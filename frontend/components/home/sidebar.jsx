import React from 'react';
import ChannelIndex from '../channels/channel_index_container';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-container sidebar">
                <h1 className="workplace">SIDEBAR</h1>
                <h3 className="sidebar-username">{this.props.user.username}</h3>
                <button className="logout" onClick={this.props.logout}>Log out</button>
                <ChannelIndex />
            </div>
        );     
    }
}

export default SideBar;