import React from 'react';

class DmItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        if (this.props.dm) {
            this.props.history.push(`/home/dms/${this.props.dm.id}`)
        } else {
            const dm = { 
                is_team: false, 
                member_ids: [ this.props.currentUserId, this.props.users.id]
            }

            this.props.createDm(dm)
                .then( () => this.props.history.push('/home/dm') )
        }
    };

    render() {
        const { dm, currentUserId, users } = this.props;
        let name = [];
        let userId;

        if (dm) {
            for (let i = 0; i < dm.member_ids.length; i++) {
                if (dm.member_ids[i] !== currentUserId) {
                    userId = dm.member_ids[i];
                    name.push(users[dm.member_ids[i]].username);
                }
            }
        } else {
            name.push(users.username);
        }

        let img;

        if (users[userId]) {
            if (users[userId].username === "DemoUser") {
                img = (
                    <img
                        className="profile-icon"
                        src={blackIcon}
                        width="36"
                        height="36"
                    />
                )
            } else if (users[userId].username === 'rich') {
                img = (
                    <img
                        className="profile-icon"
                        src={richIcon}
                        width="36"
                        height="36"
                    />
                )
            } else {
                switch (userId % 5) {
                    case 0:
                        img = (
                            <img
                                className="profile-icon"
                                src={blackIcon}
                                width="36"
                                height="36"
                            />
                        )
                        break;
                    case 1:
                        img = (
                            <img
                                className="profile-icon"
                                src={redIcon}
                                width="36"
                                height="36"
                            />
                        )
                        break;
                    case 2:
                        img = (
                            <img
                                className="profile-icon"
                                src={blueIcon}
                                width="36"
                                height="36"
                            />
                        )
                        break;
                    case 3:
                        img = (
                            <img
                                className="profile-icon"
                                src={yellowIcon}
                                width="36"
                                height="36"
                            />
                        )
                        break;
                    case 4:
                        img = (
                            <img
                                className="profile-icon"
                                src={greenIcon}
                                width="36"
                                height="36"
                            />
                        )
                        break;
                }
            }
        } else if (users.id) {
            if (users.username === "DemoUser") {
                img = (
                    <img
                        className="profile-icon"
                        src={blackIcon}
                        width="36"
                        height="36"
                    />
                )
            } else if (users.username === 'rich') {
                img = (
                    <img
                        className="profile-icon"
                        src={richIcon}
                        width="36"
                        height="36"
                    />
                )
            } else {
                switch (users.id % 5) {
                    case 0:
                        img = (
                            <img
                                className="profile-icon"
                                src={blackIcon}
                                width="36"
                                height="36"
                            />
                        )
                        break;
                    case 1:
                        img = (
                            <img
                                className="profile-icon"
                                src={redIcon}
                                width="36"
                                height="36"
                            />
                        )
                        break;
                    case 2:
                        img = (
                            <img
                                className="profile-icon"
                                src={blueIcon}
                                width="36"
                                height="36"
                            />
                        )
                        break;
                    case 3:
                        img = (
                            <img
                                className="profile-icon"
                                src={yellowIcon}
                                width="36"
                                height="36"
                            />
                        )
                        break;
                    case 4:
                        img = (
                            <img
                                className="profile-icon"
                                src={greenIcon}
                                width="36"
                                height="36"
                            />
                        )
                        break;
                }
            }
        }
        
        return (
            <li
                className="pub-li dm-create-item"
                onClick={this.handleClick}>
                {img}
                <h3 className="pub-channel-name dm-item dm-create-name-item">{name.join(", ")}</h3>
            </li>
        )
    }
};

export default DmItem;