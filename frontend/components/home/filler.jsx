import React from 'react';
import { Link } from 'react-router-dom';

class Filler extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.props.fetchCurrentUser(this.props.currentUserId)
    //     let firstChannel;
        
    //     if (this.props.currentUser) {
    //         firstChannel = this.props.currentUser.channel_ids[0];
    //     }


    //     if (firstChannel) {
    //         this.props.history.push(`/home/channels/${firstChannel}`)
    //     }

    // }

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
                    {/* <h2 className="oops">
                        Oops! Looks like you aren't a 
                        member of any channels. 
                        <Link 
                            className="oops-link" 
                            to="/home/channels">
                            Join a channel!
                        </Link>
                    </h2> */}
                </div>
            </div>
        )
    }
}

export default Filler;