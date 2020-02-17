import React from 'react';

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    };


    componentDidMount() {

        App.currentChannel = App.cable.subscriptions.create(
            { channel: "ChatChannel" },
            {
                received: data => {
                    this.setState({
                        messages: this.state.messages.concat(data.message)
                    });
                },
                speak: function (data) {
                    return this.perform("speak", data);
                }
            }
        );
    }

    componentDidUpdate() {
        this.bottom.current.scrollIntoView();
    }

    handleSubmit(e) {
        e.preventDefault();
    };

    handleKeyUp(e) {
        if (e.keyCode == 13) {
            App.room.speak(e.target.value);
            e.target.value = "";
        };
    };

    render() {
        const { messages, addMessage } = this.props;

        return (
            <div>
                <ul>
                    {messages.map((msg) => {
                        return <li key={`chat.msg.${msg.id}`}>{msg.content}</li>;
                    })
                    }
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onKeyUp={handleKeyUp} />
                </form>
            </div>
        );
    }
}

Chat.propTypes = {
    messages: PropTypes.any
};

export default Chat;