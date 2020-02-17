import React from 'react';

class MessageIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.fetchMessages(this.props.messageIds)
    }

    render() {
        return (<h1>Hi me message index component</h1>);
    }
}

export default MessageIndex;