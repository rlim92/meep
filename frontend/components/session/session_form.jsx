import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.session;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        let url;
        if (this.props.formType === "Sign up") {
            url = 'signup';
        } else {
            url = 'login';
        }
        this.props.action(this.state)
    }

    loginDemo() {
        const demo = {
            email: 'demo@meep.com',
            password: 'hunter12'
        }

        this.props.login(demo).then(
            () => this.props.history.push('/home')
        );
    };

    componentWillUnmount() {
        if (this.props.errors.length) {
            this.props.clearErrors();
        }
    };

    render() {
        let usernameInput = "";
        let prompt = (<span className="form-prompt">
            Enter <strong>email</strong> and <strong>password</strong>
        </span>)
        if (this.props.formType === 'Sign up') {
            prompt = (<span className="form-prompt">
                Enter <strong>email</strong>, <strong>username</strong> and <strong>password</strong>
            </span>)
            usernameInput = (
                <input
                    className="input username"
                    type="text"
                    value={this.state.username}
                    placeholder="username"
                    onChange={this.update('username')}
                />
            );
        };

        let errors = "";
        const inputs = document.getElementsByClassName('input')

        if (this.props.errors.length) {
            errors = this.props.errors.map( error => {
                return (
                    <p className ='errors' >{error}!</p>
                )
            })
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].classList.add('error');
            }
        } else {
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].classList.contains('error')) {
                    inputs[i].classList.remove('error');
                }    
            }
        };
        return (
            <div className="outer-session-div">
                <div className="session-form-container">
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <h3 className="input-title">{this.props.formType}</h3>
                        {prompt}
                        <input 
                            className="input email"
                            type="text"
                            value={this.state.email}
                            placeholder="email"
                            onChange={this.update('email')}
                        />
                        {usernameInput}
                        <input
                            className="input password"
                            type="password"
                            value={this.state.password}
                            placeholder="password"
                            onChange={this.update('password')}
                        />
                        {errors}
                        <button className="session-button">{this.props.formType}</button>
                        <p className="form-demo" onClick={this.loginDemo}>
                            Try out Meep through a Demo User!
                        </p>
                    </form>
                </div>
            </div>
        );
    };
};

export default SessionForm;