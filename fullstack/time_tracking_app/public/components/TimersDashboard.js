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

    handleCreateFormSubmit = timer => {
        this.createTimer(timer);
    };

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


    render () {
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList
                        timers={this.state.timers}
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
