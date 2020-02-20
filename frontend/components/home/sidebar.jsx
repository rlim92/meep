import React from 'react';
import ChannelIndex from '../channels/channel_index_container';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    loggle() {
        const profList = document.getElementsByClassName('prof-list')[0];
        if (profList.classList.contains('active')) {
            profList.classList.remove('active');
        } else {
            profList.classList.add('active');
        }
    };

    render() {
        let name;
        if (this.props.user) {
            name = this.props.user.username;
        }
        return (
            <div className="home-container sidebar">
                <div className="home-top" onClick={this.loggle.bind(this)}>
                    <h1 className="workplace">
                        <Link className="logo" to="/home">
                            <img src="https://image.flaticon.com/icons/svg/2111/2111615.svg" width="14"/>
                            <span className="red"><strong>m</strong></span>
                            <span className="blue"><strong>e</strong></span>
                            <span className="yellow"><strong>e</strong></span>
                            <span className="green"><strong>p</strong></span>
                        </Link>
                    </h1>
                    <div className="prof-list">
                        <div className="cog-ul">
                            <li
                                className="cog-li leave">
                                Set a Status
                            </li>
                            <li
                                className="cog-li leave">
                                Profile and Account
                            </li>
                            <li
                                className="cog-li leave"
                                onClick={this.props.logout}>
                                Logout
                            </li>
                        </div>
                    </div>
                    <div className="sidebar-username-container">
                        <p className="sidebar-username">
                            {name}
                        </p>
                        <img 
                            className="down-arrow" 
                            src="https://image.flaticon.com/icons/svg/748/748063.svg" 
                            width="10"
                        />
                    </div>
                </div>
                <div className="fake-search">
                    Jump to...
                </div>
                {/* <button className="logout" onClick={this.props.logout}>Log out</button> */}
                <div className="contacts">
                    <a target="_blank" href="https://github.com/rlim92">
                        <img 
                            className="contacts-git" 
                            src={window.github} 
                            width="30"
                        />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/richard-lim-7100a4a7/">
                        <img 
                            className="contacts-link" 
                            src={window.linkedin} 
                            width="30"
                        />
                    </a>
                </div>
                <ChannelIndex />
            </div>
        );     
    }
}

export default SideBar;