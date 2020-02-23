import React from "react";

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    update(field) {
        return e =>
            this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        // if (!App.currentChannel) {
        //     App.currentChannel = App.cable.subscriptions.create(
        //         {
        //             channel: "ChatChannel",
        //             id: parseInt(this.props.channel.id),
        //             authorId: this.props.currentUserId
        //         },
        //         {
        //             received: data => {
        //                 switch (data.type) {
        //                     case 'message':
        //                         this.props.receiveMessage(JSON.parse(data.message));
        //                         break;
        //                 }
        //             },
        //             speak: function (data) { return this.perform('speak', data) },
        //             load: function () { return this.perform('load') }
        //         }
        //     );
        // } 
        // else {
        //     // App.currentChannel.unsubscribe();
            
        //     App.currentChannel = App.cable.subscriptions.create(
        //         {
        //             channel: "ChatChannel",
        //             id: parseInt(this.props.channel.id),
        //             authorId: this.props.currentUserId
        //         },
        //         {
        //             received: data => {
        //                 switch (data.type) {
        //                     case 'message':
        //                         this.props.receiveMessage(JSON.parse(data.message));
        //                         break;
        //                 }
        //             },
        //             speak: function (data) { return this.perform('speak', data) },
        //             load: function () { return this.perform('load') }
        //         }
        //     );
        // }
        App.currentChannel.speak({ message: this.state.text })
            // .then( );
        this.setState({ text: "" });
    }

    // handleKeyUp(e) {
    //     if (e.keyCode == 13) {
    //         App.currentChannel.speak({message: this.state.text});
    //         this.setState({ text: "" });
    //     };
    // };

    render() {
        let name = "";

        if (this.props.channel) {
            name = `#${this.props.channel.name}`;
        } else if (this.props.dm && this.props.name !== "") {
            name = this.props.name;
        }

        return (
            <div className="message-form-container">
                <form className="message-form" onSubmit={this.handleSubmit}>
                    <input
                        className="input message"
                        type="text"
                        value={this.state.text}
                        onChange={this.update("text")}
                        // onKeyUp={this.handleKeyUp}
                        placeholder={`Message ${name}`}
                    />
                    {/* <button>Send</button> */}
                </form>
            </div>
        );
    }
}

export default MessageForm;