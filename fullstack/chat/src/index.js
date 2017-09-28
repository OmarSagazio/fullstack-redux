import '../node_modules/semantic-ui-css/semantic.min.css';
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';

import MainComponent from "../public/components/MainComponent";
import { reducer } from "../public/reducers/index";
import { addMessageAction1, addMessageAction2, deleteMessageAction } from "../public/actions/index";


const initialState = {
    messages: []
};

const createStore = (reducer, initialState) => {
    let state = initialState;
    const listeners = [];

    const subscribe = listener => listeners.push(listener);


    const getState = () => state;

    const dispatch = action => {
        state = reducer(state, action);
    };

    return {
        subscribe,
        getState,
        dispatch
    }

};


const store = createStore(reducer, initialState);


store.dispatch(addMessageAction1);
const stateV1 = store.getState();
console.log(stateV1);

store.dispatch(addMessageAction2);
const stateV2 = store.getState();
console.log(stateV2);


store.dispatch(deleteMessageAction);
const stateV3 = store.getState();
console.log(stateV3);

ReactDOM.render(
    <MainComponent/>,
    document.getElementById('content')
);
