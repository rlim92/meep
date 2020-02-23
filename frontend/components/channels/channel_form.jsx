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
            () => this.props.history.push(`/home/`)
        );
    };

    handleClick(e) {
        if (e.target.checked && !this.state.is_private) {
            this.setState({ is_private: true })
        };
    };

    exitForm(e) {
        // debugger;
        // console.log("")
        // this.props.history.goBack();
        this.props.history.push(`/home/`);
    };

    render() {
        return (
            <div className="channel-form-container">
                <form className="channel-form" onSubmit={this.handleSubmit}>
                    <div className="create-header">
                        <h2 className="create-title">Create a Channel</h2>
                        <img 
                            className="x-button" 
                            src="https://image.flaticon.com/icons/svg/2089/2089650.svg" 
                            width="25" 
                            height="25"
                            onClick={this.exitForm.bind(this)}
                        />
                    </div>
                    <div className="create-form-info">
                        <p className="create-blurb">Channels are where your team communicates. 
                            They’re best when organized around a topic 
                            — #marketing, for example.
                        </p>
                    </div>
                    <label className="input-label"><strong>Name</strong>
                        <br/>
                        <input 
                            className="create-input name"
                            type="text"
                            value={this.state.name}
                            onChange={this.update('name')}
                        />
                    </label>
                    <label className="input-label"><strong>Description</strong> (optional)
                        <br/>
                        <input
                            className="create-input description"
                            type="text"
                            value={this.state.description}
                            onChange={this.update('description')}
                        />
                        {/* <p className="blurb">What's this channel about?</p> */}
                    </label>
                    <div className="create-bottom">
                        <label className="input-label">Private:
                            <input 
                                className="isPrivate"
                                type="checkbox"
                                onClick={this.handleClick}
                            />
                        </label>
                        <button className="form-button">{this.props.formType}</button>
                    </div>
                </form>
            </div>
        );
    };
}

export default ChannelForm;