import React from 'react';
import Sidebar from './sidebar_container';
import { Route, Switch } from 'react-router-dom';
import ChannelShow from '../channels/channel_show_container';
import Filler from './filler_container';

const Home = (props) => {
    return (
        <div className="home-outer">
            <Route path={['/home', '/home/channels/:channelId', '/home/dms/:dmId']} component={Sidebar} />
            <Switch>
                <Route path="/home/channels/:channelId" component={ChannelShow} />
                <Route exact path="/home" component={Filler}/>
            </Switch>
        </div>
    )
}

export default Home;