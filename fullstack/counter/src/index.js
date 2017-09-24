import '../node_modules/semantic-ui-css/semantic.min.css';
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';

import MainComponent from "../public/components/MainComponent";
import {reducer} from "../public/reducers/CounterReducer";



const createStore = reducer => {
    let state = 0;

    const getState = () => state;

    const dispatch = action => {
        state = reducer(state, action);
    };

    return {
        getState,
        dispatch
    }
};


console.log("\n\nSTART");

const store = createStore(reducer);

const incrementAction = {
    type: 'INCREMENT',
    amount: 3
};

store.dispatch(incrementAction);
console.log(store.getState());
store.dispatch(incrementAction);
console.log(store.getState());

const decrementAction = {
    type: 'DECREMENT',
    amount: 4
};

store.dispatch(decrementAction);
console.log(store.getState());


ReactDOM.render(
    <MainComponent/>,
    document.getElementById('content')
);
