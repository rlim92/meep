import React from 'react';

class Filler extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const firstChannel = this.props.currentUser.channel_ids[0];

        debugger
        if (firstChannel) {
            this.props.history.push(`/home/channels/${firstChannel}`)
        }

    }

    render() {
        return (
            <div className="filler">
            </div>
        )
    }
}

export default Filler;