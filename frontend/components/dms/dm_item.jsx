import React from 'react';

class DmItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        if (this.props.dm) {
            this.props.history.push(`/home/dms/${this.props.dm.id}`)
        }
    };

    render() {
        const { dm, currentUserId, users } = this.props;
        let name = [];

        if (dm) {
            for (let i = 0; i < dm.member_ids.length; i++) {
                if (dm.member_ids[i] !== currentUserId) {
                    name.push(users[dm.member_ids[i]].username);
                }
            }
        } else {
            name.push(users.username);
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