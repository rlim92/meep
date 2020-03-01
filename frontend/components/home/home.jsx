import React from 'react';
import Sidebar from './sidebar_container';
import { Route, Switch } from 'react-router-dom';
import ChannelShow from '../channels/channel_show_container';
import ChannelAdd from '../channels/channel_add_container';
import DmShow from '../dms/dm_show_container';
import UserAddCh from '../dms/user_add_channel_container';
import Filler from './filler_container';
import FillerDm from './filler_dm_container';
import FillerCh from './filler_ch_container';
// import ColorThemes from './color_themes';

const Home = (props) => {
    return (
        <div className="home-outer">
            <Route exact path={['/home', '/home/channels/:channelId', '/home/dms/:dmId']} component={Sidebar} />
            <Switch>
                <Route path="/home/channels/:channelId/add" component={ChannelAdd} />
                <Route path="/home/people/:userId/addTo" component={UserAddCh} />
                <Route path="/home/channels/:channelId" component={ChannelShow} />
                <Route path="/home/dms/:dmId" component={DmShow} />
                {/* <Route path="/home/colors" component={ColorThemes} /> */}
                <Route path="/home/dm" component={FillerDm} />
                <Route path="/home/channel" component={FillerCh} />
                <Route path="/home" component={Filler}/>
            </Switch>
        </div>
    )
}

export default Home;