import React from 'react';
import DmItem from './dm_item';

class DmForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            search: "",
            result: [] 
        }
    }

    // componentDidMount() {

    // }

    // handleClick() {
    //     debugger
    //     const { addChMember, currentUserId} = this.props;
    //     addChMember(currentUserId, channelId).then(
    //         this.props.history.push(`/home/`)
    //     );
    // }

    handleSubmit(e) {
        e.preventDefault();
        // debugger;
        Object.values(this.props.users).forEach( user => {
            if (e.target.firstElementChild.value === user.username) {
                const dm = {
                    is_team: false,
                    member_ids: [this.props.currentUserId, user.id]
                }
                this.props.createDm(dm)
                    .then(() => this.props.history.push('/home'))
            }
        })
    }

    exitBrowse(e) {
        // debugger;
        // console.log(this.props);
        this.props.history.push('/home');
    }

    updateDmSearch(e) {
        const search = e.target.value;
        let result = [];

        if (search !== "") {
            Object.values(this.props.users).forEach( user => {
                if (user.id !== this.props.currentUserId && user.username.includes(search)) {
                    let already;     
                    Object.values(this.props.dms).forEach( dm => {
                        if (dm.member_ids.includes(user.id)) {
                            already = true;
                        }
                    })
                    if (!already) {
                        result.push(<DmItem
                            key={`user-item-${user.id}`}
                            users={user}
                            userItem={!already}
                            history={this.props.history}
                            currentUserId={this.props.currentUserId}
                            createDm={this.props.createDm}
                        />)
                    }  else {
                        
                    }
                }
            })
        }
        this.setState({search: search, result: result})
    }


    render() {
        let dmItems;
        let blurb = "Recent Conversations"


        if (this.state.search !== "") {
            dmItems = this.state.result;
            blurb = "";
        } else {
            dmItems = Object.values(this.props.dms).map( dm => {
                return (
                    <DmItem 
                        key={`dm-item-${dm.id}`} 
                        dm={dm} 
                        users={this.props.users}
                        history={this.props.history}
                        currentUserId={this.props.currentUserId}
                    />
                )
            })
        }

        return (
            <div className="add-channel-container">

                <div className="add-inner-container">
                    <div className="add-top-container">
                        <div className="invis-thing">
                        </div>
                        <div className="add-channel-top">
                            <h3 className="add-browse dm">Direct Messages</h3>
                            <form className="fake-search-dm-form" onSubmit={this.handleSubmit.bind(this)}>
                                <input 
                                    className="fake-search-dm"
                                    type="text"
                                    placeholder="Find or start a conversation"
                                    onChange={this.updateDmSearch.bind(this)}
                                />
                                <button className="form-button dm-form-button">
                                    Go
                                </button>
                            </form>
                        </div>
                        <div>
                            <img
                                className="x-button"
                                src="https://image.flaticon.com/icons/svg/2089/2089650.svg"
                                width="25"
                                height="25"
                                onClick={this.exitBrowse.bind(this)}
                            />
                        </div>
                    </div>
                    <div className="pub-list-container">
                        <p className="add-blurb">{blurb}</p>
                        <ul className="pub-ul">
                            {dmItems}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DmForm;