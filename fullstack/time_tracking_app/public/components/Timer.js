import React from 'react';
// import * as moment from 'moment';
import moment from 'moment';
import 'moment-duration-format'

class Timer extends React.Component {

    renderElapsedString = (elapsed) => {
        // const time = moment.duration(elapsed);
        return moment.duration(elapsed).format('HH:mm:ss', { trim: false});
        // return time.hours()+ ":" + time.minutes() + ":" + time.seconds();
    };


    render() {
        // TODO: =edit | move to "helpers.js" file
        // const elapsedString = helpers.renderElapsedString(this.props.elapsed);
        const elapsedString = this.renderElapsedString(this.props.elapsed);

        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="header">{this.props.title}</div>
                    <div className="meta">{this.props.project}</div>
                    <div className="center aligned description">
                        <h2>{elapsedString}</h2>
                    </div>
                    <div className="extra content">
                        <span className="right floated edit icon">
                            <i className="edit icon"></i>
                        </span>
                        <span className="right floated trash icon">
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