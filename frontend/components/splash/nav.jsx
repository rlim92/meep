import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {

    return (
        <nav className="navbar">
            <div className='divnav-left'>
                <ul className="navbar-ul left">
                    <li>
                        <Link className="logo" to="/">
                            <img className="colored-logo" src={window.slackIcon} width="12" />
                            <span className="red">m</span>
                            <span className="blue">e</span>
                            <span className="yellow">e</span>
                            <span className="green">p</span>
                        </Link>
                    </li>
                    <li className="navbar-ul-left-li">
                        <a target="_blank" href="https://github.com/rlim92">Github</a>
                    </li>
                    <li className="navbar-ul-left-li">
                        <a target="_blank" href="https://www.linkedin.com/in/richard-lim-7100a4a7/">LinkedIn</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="navbar-ul right">
                    <li>
                        <Link className="nav-login" to="/login">Sign in</Link>
                    </li>
                    <li>
                        <Link className="nav-signup" to="/signup">Get Started</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;