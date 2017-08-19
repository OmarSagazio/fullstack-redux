import React from 'react';
import uuid from 'uuid';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';


class TimersDashboard extends React.Component {

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
