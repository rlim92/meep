import React from 'react';
import { Link } from 'react-router-dom';

class ChannelIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    // componentDidMount() {
    //     const { currentChId, channel } = this.props;
    //     if (currentChId === channel.id) {
    //         const current = document.getElementById(channel.id);
    //         // debugger
    //         if (!current.classList.contains('current')) {
    //             current.classList.add('current');
    //         }
    //     } else {
    //         const current = document.getElementById(channel.id);
    //         if (current.classList.contains('current')) {
    //             current.classList.remove('current');
    //         }
    //     }
    // };

    render() {
        return (
            <Link to={`/home/channels/${this.props.channel.id}`}>
                <li id={this.props.channel.id} className="channel-li">
                    <span className="hashtag">#</span>
                    {this.props.channel.name}
                </li>
            </Link>
        );
    }
};

export default ChannelIndexItem;