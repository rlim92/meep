import React from 'react';
import Sidebar from './sidebar_container';
import { Route, Switch } from 'react-router-dom';
import ChannelShow from '../channels/channel_show_container';
import DmShow from '../dms/dm_show_container';
import Filler from './filler_container';
import ColorThemes from './color_themes';

const Home = (props) => {
    return (
        <div className="home-outer">
            <Route path={['/home', '/home/channels/:channelId', '/home/dms/:dmId']} component={Sidebar} />
            <Switch>
                <Route path="/home/channels/:channelId" component={ChannelShow} />
                <Route path="/home/dms/:dmId" component={DmShow} />
                <Route path="/home/colors" component={ColorThemes} />
                <Route path="/home" component={Filler}/>
            </Switch>
        </div>
    )
}

export default Home;