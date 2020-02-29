import React from 'react';
import { Link } from 'react-router-dom';

class Filler extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let firstChannel;
        // debugger;

        // if (this.props.history)

        if (!this.props.currentUser) {
            this.props.fetchCurrentUser(this.props.currentUserId)
        } else {
            firstChannel = this.props.currentUser.channel_ids[0];
        }

        if (firstChannel) {
            this.props.history.push(`/home/channels/${firstChannel}`)
        }

    }

    // componentDidUpdate(prevProps) {
    //     if (!prevProps.currentUser || this.props.currentUser) {
    //         const firstChannel = this.props.currentUser.channel_ids[0];
    //         if (firstChannel) {
    //             this.props.history.push(`/home/channels/${firstChannel}`)
    //         }
    //     }
    // }

    render() {
        return (
            <div className="filler">
                <div>
                    <h2 className="oops">
                        Oops! Looks like you aren't a 
                        member of any channels. 
                        <Link 
                            className="oops-link" 
                            to="/home/channels">
                            Join a channel!
                        </Link>
                    </h2>
                    <img src="https://serverdensity-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/Blog_Hipchat_to_Slack.png"/>
                </div>
            </div>
        )
    }
}

export default Filler;