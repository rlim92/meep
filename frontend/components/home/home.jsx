import React from 'react';
import Sidebar from './sidebar_container';
import { Route } from 'react-router-dom';
import ChannelShow from '../channels/channel_show_container';

const Home = (props) => {
    return (
        <div className="home-outer">
            <Route path={['/home', '/home/channels/:channelId', '/home/dms/:dmId']} component={Sidebar} />
            <Route path="/home/channels/:channelId" component={ChannelShow} />
        </div>
    )
}

export default Home;