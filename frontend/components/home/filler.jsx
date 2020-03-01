import React from 'react';
import { Link } from 'react-router-dom';

class Filler extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let firstChannel;
        // debugger;
        const { currentUser } = this.props;

        if (this.props.fromDmForm) {
            const dms = Object.values(this.props.dms)
            const newDm = dms[dms.length-1]
            // debugger;
            this.props.history.push(`/home/dms/${newDm.id}`)
        } else if (this.props.fromChForm) {
            const chs = Object.values(this.props.channels)
            const newCh = chs[chs.length - 1]
            this.props.history.push(`/home/channels/${newCh.id}`)
        } else {
            if (!this.props.currentUser) {
                this.props.fetchCurrentUser(this.props.currentUserId)
            } else {
                firstChannel = currentUser.channel_ids[0];
            }
    
            if (firstChannel) {
                this.props.history.push(`/home/channels/${firstChannel}`)
            }
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
                    <img src={blackhole}/>
                </div>
            </div>
        )
    }
}

export default Filler;