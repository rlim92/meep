import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.loginDemo = this.loginDemo.bind(this)
    }

    loginDemo() {
        const demo = {
            email: 'demo@meep.com',
            password: 'hunter12'
        }

        this.props.login(demo).then(
            () => this.props.history.push('/home')
        );
    };

    render() {
        return (
            <div className='splash-container'>
                <section className='splash section-1'>
                    <div className='subsection-1'>
                        {/* <img src="{window.slackBackground}"/> */}
                        <h1 className="section-1 head">Meep replaces email inside your company</h1>
                        <p>
                            Keep conversations organized in Meep, 
                            the meep alternative to email
                        </p>

                        <Link className="signup" to='signup'>Try Meep</Link>
                        <button className="demo" onClick={this.loginDemo}>See the Demo</button>
                        <br/>
                        <br/>
                        <span className="already">Already meeping? <Link className="already-link"to='login'>Sign in</Link>.</span>
                    </div>
                </section>
                <section className='splash section-2'>
                    <h2 className="break">Break out of the inbox</h2>
                    <p>
                        Working in channels gives everyone on your 
                        team a shared view of progress and purpose.
                    </p>
                    <br/>
                    <iframe width="870" height="489.38" 
                        src="https://www.youtube.com/embed/AmUCLnN56f0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; 
                        picture-in-picture">
                    </iframe>
                    <div className="inbox-items">
                        <div>
                            <img className="png" src="https://image.flaticon.com/icons/svg/589/589380.svg" width="50"/>
                            <h3>Conversations, organized</h3>
                            <span>
                                Instead of a single overstuffed inbox, 
                                conversations in Meep happen in dedicated 
                                spaces called channels.
                            </span>
                        </div>
                        <div>
                            <img className="png" src="https://image.flaticon.com/icons/svg/2496/2496396.svg" width="50"/>
                            <h3>Get looped in, not out</h3>
                            <span>
                                Meep makes it simple to follow 
                                conversations or find important information 
                                in an easily searchable archive.
                            </span>
                        </div>
                        <div>
                            <img className="png" src="https://image.flaticon.com/icons/svg/2076/2076001.svg" width="50"/>
                            <h3>Give focus a chance</h3>
                            <span>
                                Unlike email, Meep lets you choose 
                                which conversations are most important 
                                — and which can wait.
                            </span>
                        </div>
                    </div>
                </section>
                <section className='splash section-3'>
                    <div className='div3 first'>
                        <div className="splash3-content first">
                            <h2>Make the change to channels</h2>
                            <p>
                                Productive teamwork happens in channels 
                                — organized spaces for everything 
                                related to a project, topic or team.
                            </p>
                        </div>
                        <img src="https://zdnet2.cbsistatic.com/hub/i/r/2018/01/16/cbdaf384-6556-4853-a1cf-3ed88d4d15ea/resize/770xauto/c195cdbbb376912eb88f0391770e19d6/screen-shot-2018-01-16-at-4-29-37-pm.png" width="500"/>
                    </div>
                    <div className='div3 second'>
                        <img src="https://slack.zendesk.com/hc/article_attachments/360032558613/Send_emails_to_Slack.png" width="500"/>
                        <div className="splash3-content second">
                            <h2>Shared channels bring companies together</h2>
                            <p>
                                Now channels can help you work as closely 
                                with external partners and clients as you 
                                do with teams down the hall.
                            </p>
                        </div>
                    </div>
                </section>
                <section className='splash contact'>
                    <h1>Contact Me</h1>
                    <ul className="contact-ul">
                        <li>
                            <a target="_blank" href="https://github.com/rlim92">
                                <img src={window.github} width="100"/>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/richard-lim-7100a4a7/">
                                <img src="https://www.iconsdb.com/icons/preview/white/linkedin-3-xxl.png" width="100"/>
                            </a>
                        </li>
                    </ul>
                </section>
                <section className='splash section-4'>
                    <h2>Choose a better way to work</h2>
                    <div>
                        <Link className="sec4-signup" to='signup'>Try Meep</Link>
                        <button className="sec4-demo" onClick={this.loginDemo}>See the Demo</button>
                    </div>
                </section>
                <footer className="footer">
                    Meep is a dark-mode slack clone created by Rich Lim
                </footer>
            </div>
        );
    };
};

export default Splash;