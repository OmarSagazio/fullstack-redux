import React from 'react';
import TimerForm from './TimerForm';


class ToggleableTimerForm extends React.Component {

    // ---------------------------------
    //  Init
    // ---------------------------------
    state = {
        isOpen: false
    };


    // ---------------------------------
    //  Handlers
    // ---------------------------------
    handleFormOpen = () => this.setState({isOpen: true});

    handleFormClose = () => this.setState({isOpen: false});

    handleFormSubmit = timer => {
        this.props.onFormSubmit(timer);
        this.setState({isOpen: false});
    };


    // ---------------------------------
    //  Render
    // ---------------------------------
    render() {
        if (this.state.isOpen) {
            return (
                <TimerForm
                    onFormSubmit={this.handleFormSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return (
                <div className="ui basic content center aligned segment">
                    <button
                        className="ui basic button icon"
                        onClick={this.handleFormOpen}>
                        <i className="plus icon"></i>
                    </button>
                </div>
            );
        }
    }

}

export default ToggleableTimerForm;
