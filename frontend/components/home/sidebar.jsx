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
                <h1 className="workplace">
                    <Link className="logo" to="/home">
                        <img src="https://image.flaticon.com/icons/svg/2111/2111615.svg" width="14"/>
                        <span className="red"><strong>m</strong></span>
                        <span className="blue"><strong>e</strong></span>
                        <span className="yellow"><strong>e</strong></span>
                        <span className="green"><strong>p</strong></span>
                    </Link>
                </h1>
                <p className="sidebar-username">{this.props.user.username}</p>
                <button className="logout" onClick={this.props.logout}>Log out</button>
                <ChannelIndex />
            </div>
        );     
    }
}

export default SideBar;