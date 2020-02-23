import React from 'react';
import DmItem from './dm_item';

class DmForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { username: "" }
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

    exitBrowse(e) {
        // debugger;
        // console.log(this.props);
        this.props.history.push('/home');
    }

    render() {
        // const pubChannels = Object.values(this.props.channels).map(ch => {
        //     return (
        //         <PubChItem
        //             key={[ch.id, ch.id]}
        //             currentUserId={this.props.currentUserId}
        //             addChMember={this.props.addChMember}
        //             fetchChannel={this.props.fetchChannel}
        //             channel={ch}
        //             history={this.props.history}
        //             fetchCurrentUser={this.props.fetchCurrentUser}
        //         />
        //     )
        // })

        const dmItems = Object.values(this.props.dms).map( dm => {
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

        return (
            <div className="add-channel-container">

                <div className="add-inner-container">
                    <div className="add-top-container">
                        <div className="invis-thing">
                        </div>
                        <div className="add-channel-top">
                            <h3 className="add-browse dm">Direct Messages</h3>
                            {/* <p>Channels you can join</p> */}
                            <form className="fake-search-dm-form">
                                <input 
                                    className="fake-search-dm"
                                    type="text"
                                    placeholder="Find or start a conversation"
                                />
                                <button className="form-button">
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
                        <p className="add-blurb">Recent Conversations</p>
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