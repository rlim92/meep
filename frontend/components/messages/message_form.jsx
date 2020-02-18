import React from "react";

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    update(field) {
        return e =>
            this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        App.currentChannel.speak({ message: this.state.text })
            // .then( );
        this.setState({ text: "" });
    }

    handleKeyUp(e) {
        if (e.keyCode == 13) {
            App.currentChannel.speak({message: this.state.text});
            this.setState({ text: "" });
        };
    };

    render() {
        let name;
        if (this.props.channel) {
            name = this.props.channel.name;
        }
        return (
            <div className="message-form-container">
                <form className="message-form" onSubmit={this.handleSubmit}>
                    <input
                        className="input message"
                        type="text"
                        value={this.state.text}
                        onChange={this.update("text")}
                        onKeyUp={this.onKeyUp}
                        placeholder={`Message #${name}`}
                    />
                    {/* <button>Send</button> */}
                </form>
            </div>
        );
    }
}

export default MessageForm;