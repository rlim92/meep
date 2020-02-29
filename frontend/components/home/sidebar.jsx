import React from 'react';
import ChannelIndex from '../channels/channel_index_container';
import DmIndex from '../dms/dm_index_container';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.prevIdx = "";
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

    gray() {
        const root = document.getElementsByClassName('app-div')[0];
        // debugger
        if (root.id !== "") {
            root.id = "";
        } else {
            // debugger;
            const themes = ['red-theme', 'blue-theme', 'yellow-theme', 'green-theme', 'dark-theme'];
            let idx = Math.floor(Math.random(themes.length - 1) * 5);
            while (this.prevIdx === idx) {
                idx = Math.floor(Math.random(themes.length - 1) * 5);
            }
            // const idx = Math.floor(Math.random(themes.length-1)*5);
            root.id = themes[idx];
            this.prevIdx = idx;
        }
    }

    red() {
        const root = document.getElementsByClassName('app-div')[0];
        if (root.id !== 'red-theme') {
            root.id = 'red-theme';
            this.prevIdx = 0;
        }
    }

    blue() {
        const root = document.getElementsByClassName('app-div')[0];
        if (root.id !== 'blue-theme') {
            root.id = 'blue-theme';
            this.prevIdx = 1;
        }
    }

    yellow() {
        const root = document.getElementsByClassName('app-div')[0];
        if (root.id !== 'yellow-theme') {
            root.id = 'yellow-theme';
            this.prevIdx = 2;
        }
    }

    green() {
        const root = document.getElementsByClassName('app-div')[0];
        if (root.id !== 'green-theme') {
            root.id = 'green-theme';
            this.prevIdx = 3;
        }
    }

    dark() {
        const root = document.getElementsByClassName('app-div')[0];
        if (root.id !== 'dark-theme') {
            root.id = "dark-theme";
            this.prevIdx = 4;
        }
    }

    render() {
        let name;
        let online;

        if (this.props.user) {
            name = this.props.user.username;
        }


        return (
            <div className="home-container sidebar">
                <div className="home-top" onClick={this.loggle.bind(this)}>
                    <h1 className="workplace">
                        <div className="logo">
                            <img 
                                className="colored-logo" 
                                // src={window.blackhole}
                                src={window.slackIcon}
                                // src="https://image.flaticon.com/icons/svg/2111/2111615.svg"
                                // src="https://image.flaticon.com/icons/svg/2111/2111674.svg" 
                                width="14"
                            />
                            <img
                                className="dark-logo"
                                // className="colored-logo"
                                // src={window.slackIcon}
                                src="https://image.flaticon.com/icons/svg/2111/2111674.svg"
                                width="14"
                            />
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
                                {/* <Link to="/home/colors" className="colors link">
                                    <li
                                        className="cog-li colors">
                                        Color Themes
                                    </li>
                                </Link> */}
                                <li
                                    className="cog-li colors red-theme"
                                    onClick={this.red.bind(this)}>                                   
                                    {/* <img className="element" 
                                        src={window.flame} height="11"/> */}
                                    Red Theme
                                </li>
                                <li
                                    className="cog-li colors blue-theme"
                                    onClick={this.blue.bind(this)}>
                                    {/* <img className="element"
                                        src={window.waterdrop} height="11" /> */}
                                    Blue Theme
                                </li>
                                <li
                                    className="cog-li colors yellow-theme"
                                    onClick={this.yellow.bind(this)}>
                                    {/* <img className="element"
                                        src={window.bolt} height="11" /> */}
                                    Yellow Theme
                                </li>
                                <li
                                    className="cog-li colors green-theme"
                                    onClick={this.green.bind(this)}>
                                    {/* <img className="element"
                                        src={window.tornado} height="11" /> */}
                                    Green Theme
                                </li>
                                <li
                                    className="cog-li colors dark-theme"
                                    onClick={this.dark.bind(this)}>
                                    {/* <img className="element"
                                        src={window.void} height="11" /> */}
                                    Darker Theme
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
                            className="online blackhole"
                            src={window.whitehole}
                            // src='https://image.flaticon.com/icons/svg/319/319873.svg'
                        />
                        <img
                            className="online flame"
                            src={window.flame}
                            // src='https://image.flaticon.com/icons/svg/319/319873.svg'
                        />
                        <img
                            className="online waterdrop"
                            src={window.waterdrop}
                            // src='https://image.flaticon.com/icons/svg/319/319873.svg'
                        />
                        <img
                            className="online bolt"
                            src={window.bolt}
                            // src='https://image.flaticon.com/icons/svg/319/319873.svg'
                        />
                        <img
                            className="online tornado"
                            src={window.tornado}
                            // src='https://image.flaticon.com/icons/svg/319/319873.svg'
                        />
                        <img
                            className="online colored"
                            // src={window.whitehole}
                            src='https://image.flaticon.com/icons/svg/319/319873.svg'
                        />
                        <p className="sidebar-username">
                            {name}
                        </p>
                        <img 
                            className="down-arrow" 
                            src="https://image.flaticon.com/icons/svg/748/748063.svg" 
                            width="10"
                            height="10"
                        />
                    </div>
                </div>
                <div className="fake-search" onClick={this.gray.bind(this)}>
                    <span className="jump-to">Surprise me...</span>
                    <span className="darkness-og">Back to Classic...</span>
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
                    <DmIndex currentUserId={this.props.currentUserId}/>
                </div>
            </div>
        );     
    }
}

export default SideBar;