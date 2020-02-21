import React from 'react';
import { Link } from 'react-router-dom';

class DmIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     // debugger
    //     this.props.fetchDmMembers(this.props.dm.id);
    // }

    render() {
        // const { currentUserId } = this.props;
        // let otherMemberId; 
        // for (let i = 0; i < this.props.dm.member_ids.length; i++) {
        //     if (this.props.dm.member_ids[i] !== currentUserId) {
        //         // debugger
        //         otherMemberId = i;
        //     }

        // }

        // let otherMemberName = "loading...";
        // debugger
        // if (this.props.users && this.props.users[otherMemberId]) {
        //     debugger;
        //     otherMemberName = this.props.users[otherMemberId].username;
        // }

        return (
            <Link to={`/home/dms/${this.props.dm.id}`}>
                <li className="channel-li">
                <span className="hashtag">{this.props.dm.member_ids.length}</span>
                    {/* Name */}
                    {this.props.otherMemberName}
                </li>
            </Link>
        );
    }
};

export default DmIndexItem;