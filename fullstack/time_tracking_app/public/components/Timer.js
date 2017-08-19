import React from 'react';
// import * as moment from 'moment';
import moment from 'moment';
import 'moment-duration-format'

class Timer extends React.Component {
    // ---------------------------------
    //  Lifecycle
    // ---------------------------------
    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
    };

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    };

    // ---------------------------------
    //  Handlers
    // ---------------------------------
    handleTrashClick = () => {
        this.props.onTrashClick(this.props.id);
    };

    // ---------------------------------
    //  Methods
    // ---------------------------------
    // TODO: export in helper.js
    renderElapsedString = (elapsed, runningSince) => {
        // const time = moment.duration(elapsed);
        if (runningSince) {
            elapsed += Date.now() - runningSince;
        }
        return moment.duration(elapsed).format('HH:mm:ss', { trim: false});
    };

    // ---------------------------------
    //  Render
    // ---------------------------------
    render() {
        // TODO: =edit | move to "helpers.js" file
        // const elapsedString = helpers.renderElapsedString(this.props.elapsed);
        const elapsedString = this.renderElapsedString(this.props.elapsed, this.props.runningSince);

        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="header">{this.props.title}</div>
                    <div className="meta">{this.props.project}</div>
                    <div className="center aligned description">
                        <h2>{elapsedString}</h2>
                    </div>
                    <div className="extra content">
                        <span
                            className="right floated edit icon"
                            onClick={this.props.onEditClick}>
                            <i className="edit icon"></i>
                        </span>
                        <span
                            className="right floated trash icon"
                            onClick={this.handleTrashClick}>
                            <i className="trash icon"></i>
                        </span>
                    </div>
                </div>
                <div className="ui bottom attached blue basic button">Start</div>
            </div>
        );
    }
}

export default Timer;
