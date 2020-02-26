import React from 'react';

class ColorTheme extends React.Component {
    constructor(props) {
        super(props);
    }

    red() {

    }

    blue() {

    }

    yellow() {

    }

    green() {

    }

    render() {
        return (
            <div>
                <img src={window.flame} width="50"/>
                <img src={window.waterdrop} width="50"/>
                <img src={window.bolt} width="50"/>
                <img src={window.tornado} width="50"/>
                <img src={window.slackIcon} width="50" />
            </div>
        )
    }
}

export default ColorTheme;