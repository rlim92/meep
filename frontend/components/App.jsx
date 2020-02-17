import React from 'react';
import NavBar from './splash/nav_container';
import Signup from '../components/session/session_sign_up_container';
import Login from '../components/session/session_log_in_container';
import Splash from '../components/splash/splash_container';
import Home from '../components/home/home';
import CreateChannelForm from './channels/create_channel_form_container';
import PublicChannelIndex from './channels/public_channel_index_container';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/rout_utils';

const App = () => {
    return (
        <div>
            <header>
                <AuthRoute exact path="/" component={NavBar} />
            </header>
            <Switch>
                <AuthRoute path="/signup" component={Signup} />
                <AuthRoute path="/login" component={Login} />
                <ProtectedRoute path='/home/channels/create' component={CreateChannelForm} />
                <ProtectedRoute exact path='/home/channels/' component={PublicChannelIndex} />
                <ProtectedRoute path="/home" component={Home} />
                <AuthRoute exact path="/" component={Splash} />
            </Switch>
        </div>
    )
}

export default App;