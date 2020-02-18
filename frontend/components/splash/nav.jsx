import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    let rightSide;
    if (props.currentUser) {
        rightSide = () => (
            <ul>
                <li className="logout-li">
                    <button className="logout" onClick={props.logout}>Log out</button>
                </li>
            </ul>
        );
    } else {
        rightSide = () => (
            <ul className="navbar-ul right">
                <li>
                    <Link className="nav-login" to="/login">Sign in</Link>
                </li>
                <li>
                    <Link className="nav-signup" to="/signup">Get Started</Link>
                </li>
            </ul>
        );
    }
    return (
        <nav className="navbar">
            <div className='divnav-left'>
                {/* <span className="logo">Meep</span> */}
                <ul className="navbar-ul left">
                    {/* <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" width="50"/> */}
                    <li>
                        <Link className="logo" to="/">
                            <img src="https://image.flaticon.com/icons/svg/2111/2111615.svg" width="12" />
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
                {rightSide()}
            </div>
        </nav>
    );
};

export default Nav;