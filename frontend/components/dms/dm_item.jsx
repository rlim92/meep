import React from 'react';


class DmItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        this.props.history.push(`/home/dms/${this.props.dm.id}`)
    };

    render() {
        const { dm, currentUserId, users } = this.props;
        let name = [];

        for (let i = 0; i < dm.member_ids.length; i++) {
            // debugger
            if (dm.member_ids[i] !== currentUserId) {
                // debugger
                name.push(users[dm.member_ids[i]].username);
            }
        }
        
        return (
            <li
                className="pub-li"
                onClick={this.handleClick}>
                <h3 className="pub-channel-name dm-item">{name.join(", ")}</h3>
            </li>
        )
    }
};

export default DmItem;