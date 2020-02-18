import React from 'react';
import ChannelIndex from '../channels/channel_index_container';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-container sidebar">
                <h1 className="workplace"><Link className="logo" to="/home">
                    <span className="red">m</span>
                    <span className="blue">e</span>
                    <span className="yellow">e</span>
                    <span className="green">p</span>
                </Link></h1>
                <h3 className="sidebar-username">{this.props.user.username}</h3>
                <button className="logout" onClick={this.props.logout}>Log out</button>
                <ChannelIndex />
            </div>
        );     
    }
}

export default SideBar;