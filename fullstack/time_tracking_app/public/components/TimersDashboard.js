import React from 'react';
import uuid from 'uuid';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';


class TimersDashboard extends React.Component {

    // ---------------------------------
    //  Init
    // ---------------------------------
    state = {
        timers: [
            {
                title: 'Practice squat',
                project: 'Gym Chores',
                id: uuid.v4(),
                elapsed: 5456099,
                runningSince: Date.now()
            },
            {
                title: 'Bake squash',
                project: 'Kitchen Chores',
                id: uuid.v4(),
                elapsed: 1273998,
                runningSince: null
            }
        ]
    };


    // ---------------------------------
    //  Handlers
    // ---------------------------------
    handleCreateFormSubmit = timer => this.createTimer(timer);

    handleEditFormSubmit = attrs => this.updateTimer(attrs);

    handleTrashClick = timerId => this.deleteTimer(timerId);

    handleStartClick = timerId => this.startTimer(timerId);

    handleStopClick = timerId => this.stopTimer(timerId);


    // ---------------------------------
    //  Methods
    // ---------------------------------
    // TODO: move to "helpers.js" file
    newTimer = (timer) => {
        return {
            ...timer,
            id: timer.id || uuid.v4(),
            key: uuid.v4(),
            elapsed: 0,
            runningSince: null
        }
    };

    createTimer = timer => {
        const t = this.newTimer(timer);
        // const t = helpers.newTimer(timer);

        console.log(t);

        this.setState({
            timers: this.state.timers.concat(t)
        });
    };

    updateTimer = (attrs) => {
        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === attrs.id) {
                    return {
                        ...timer,
                        title: attrs.title,
                        project: attrs.project
                    }
                } else {
                    return timer;
                }
            })
        });
    };

    deleteTimer = timerId => {
        this.setState({
            timers: this.state.timers.filter(t => t.id !== timerId)
        });
    };

    startTimer = timerId => {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map(timer => {
                if(timer.id === timerId) {
                    return {
                        ...timer,
                        runningSince: now
                    };
                } else {
                    return timer;
                }
            })
        });
    };

    stopTimer = timerId => {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map(timer => {
                if(timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince;
                    return {
                        ...timer,
                        elapse: timer.elapsed + lastElapsed,
                        runningSince: null
                    };
                } else {
                    return timer;
                }
            })
        });
    };


    // ---------------------------------
    //  Render
    // ---------------------------------
    render () {
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList
                        timers={this.state.timers}
                        onFormSubmit={this.handleEditFormSubmit}
                        onTrashClick={this.handleTrashClick}
                        onStartClick={this.handleStartClick}
                        onStopClick={this.handleStopClick}
                    />
                    <ToggleableTimerForm
                        onFormSubmit={this.handleCreateFormSubmit}
                    />
                </div>
            </div>
        );
    }
}

export default TimersDashboard;
