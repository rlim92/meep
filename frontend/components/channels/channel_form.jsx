import React from 'react';


class ChannelForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.channel;

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    };

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        };
    };

    handleSubmit(e) {
        e.preventDefault();

        this.props.action(this.state).then(
            () => this.props.history.push('/home')
        );
    }

    handleClick(e) {
        if (e.target.checked) {
            this.setState({ is_private: true })
        }
    }

    render() {
        return (
            <div className="channel-form-container">
                <form className="channel-form" onSubmit={this.handleSubmit}>
                    <label className="input-label">Name
                        <input 
                            className="input name"
                            type="text"
                            value={this.state.name}
                            onChange={this.update('name')}
                        />
                    </label>
                    <label className="input-label">Description(optional)
                        <input
                            className="input description"
                            type="text"
                            value={this.state.description}
                            onChange={this.update('description')}
                        />
                    </label>
                    <p className="blurb">What's this channel about?</p>
                    <label>Private:
                        <input 
                            className="isPrivate"
                            type="checkbox"
                            onClick={this.handleClick}
                        />
                    </label>
                    <button>{this.props.formType}</button>
                </form>
            </div>
        );
    }
}

export default ChannelForm;