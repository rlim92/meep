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
            <div className="colors-div">
                <div className="colors-inner-div-1">
                    <img className="water" src="https://image.flaticon.com/icons/svg/606/606797.svg" width="50" height="50"/>
                    <img className="lightning" src="https://image.flaticon.com/icons/svg/1330/1330254.svg" width="50" height="50" />
                </div>
                <div className="colors-inner-div-2">
                    <img className="fire" src="https://image.flaticon.com/icons/svg/785/785218.svg" width="50" height="50" />
                    <img className="wind" src="https://image.flaticon.com/icons/svg/615/615579.svg" width="50" height="50"/>
                </div>
                {/* <img src={window.slackIcon} width="50" /> */}
            </div>
            // <img src={blackhole} width="50"/>
        )
    }
}

export default ColorTheme;