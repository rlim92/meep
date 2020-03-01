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
        let iconThing = this.props.dm.member_ids.length
        if (this.props.dm.member_ids.length < 3) {
            iconThing = (
                <img 
                    className="dm-online-icon"
                    src='https://image.flaticon.com/icons/svg/319/319873.svg'
                    width="9"
                    height="9"
                     />
            )
        }
        return (
            <Link to={`/home/dms/${this.props.dm.id}`}>
                <li id={`dm-${this.props.dm.id}`} className="channel-li">
                <span className="hashtag">{iconThing}</span>
                    {this.props.otherMemberName}
                </li>
            </Link>
        );
    }
};

export default DmIndexItem;