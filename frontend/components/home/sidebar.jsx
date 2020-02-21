import React from 'react';
import ChannelIndex from '../channels/channel_index_container';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    loggle(e) {
        e.stopPropagation();

        const profList = document.getElementsByClassName('prof-list')[0];
        const outerDiv = document.getElementsByClassName('outer-log-dropdown')[0];

        if (profList.classList.contains('active')) {
            profList.classList.remove('active');
            outerDiv.classList.remove('active');
        } else {
            profList.classList.add('active');
            outerDiv.classList.add('active');
        }
    };

    closeLog(e) {
        e.stopPropagation();

        const profList = document.getElementsByClassName('prof-list')[0];
        const outerDiv = document.getElementsByClassName('outer-log-dropdown')[0];

        if (cogList.classList.contains('active') && outerDiv.classList.contains('active')) {
            profList.classList.remove('active');
            outerDiv.classList.remove('active');
        }
    }

    render() {
        let name;
        if (this.props.user) {
            name = this.props.user.username;
        }
        return (
            <div className="home-container sidebar">
                <div className="home-top" onClick={this.loggle.bind(this)}>
                    <h1 className="workplace">
                        <div className="logo">
                            <img src="https://image.flaticon.com/icons/svg/2111/2111615.svg" width="14"/>
                            <span className="red"><strong>m</strong></span>
                            <span className="blue"><strong>e</strong></span>
                            <span className="yellow"><strong>e</strong></span>
                            <span className="green"><strong>p</strong></span>
                        </div>
                    </h1>
                    <div className="outer-log-dropdown">
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
                    </div>
                    <div className="sidebar-username-container">
                        <img 
                            className="online"
                            src={window.greenOnline}
                            // width="12"
                            // height="10"
                        />
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
                <div className="ch-dm-container">
                    <ChannelIndex />
                </div>
            </div>
        );     
    }
}

export default SideBar;