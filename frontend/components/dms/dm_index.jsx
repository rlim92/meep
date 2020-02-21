import React from 'react';
import DmIndexItem from './dm_index_item';
import { Link } from 'react-router-dom';

class DmIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        // if (this.props.currentUserId) {
        // this.props.fetchCurrentUser(this.props.currentUserId).then(
            this.props.fetchUserDms(this.props.currentUserId).then(
                ()=> {
                    // debugger;
                    this.props.fetchUserDmMembers(this.props.currentUserId)
                }
            )
        // }
    }

    render() {
        // debugger
        let currentDmId;
        let currentUserId;
        let users;
        if (this.props.match) {
            currentDmId = this.props.match.params.dmId
        }
        if (this.props.currentUser) {
            currentUserId = this.props.currentUser.id
        }
        if (this.props.users) {
            users = this.props.users
        }

        let otherMemberName;

        const dmItemLis = Object.values(this.props.dms).map(dm => {
            if (users && currentUserId) {
                for (let i = 0; i < dm.member_ids.length; i++) {
                    if (dm.member_ids[i] !== currentUserId && users[dm.member_ids[i]]) {
                        // debugger
                        otherMemberName = users[dm.member_ids[i]].username;
                        break;
                    }
                }
            }
            return (
                <DmIndexItem
                    key={dm.member_ids}
                    dm={dm}
                    currentUserId={currentUserId}
                    otherMemberName={otherMemberName}
                    currentDmId={currentDmId}
                    fetchDmMembers={this.props.fetchDmMembers}
                />
            )
        })

        return (
            <div className="channels-index">
                <div className="title-and-create">
                    {/* <Link className="title-browse" to="/home/channels"> */}
                        <h3 className="channels-header">Direct Messages</h3>
                    {/* </Link> */}
                    <Link className="create-link" to="/home/dms/create">
                        <img className="create-button" src="https://image.flaticon.com/icons/svg/58/58282.svg" width="15" />
                    </Link>
                </div>
                <ul className="channels-ul">
                    {dmItemLis}
                    <li>
                    </li>
                    {/* <Link to="/home/channels">
                        <li className="channel-li add-ch">
                            <span className="hashtag">+</span> Add a channel
                        </li>
                    </Link> */}
                </ul>
            </div>
        );
    };
};

export default DmIndex;