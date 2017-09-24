import '../node_modules/semantic-ui-css/semantic.min.css';
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';

import MainComponent from "../public/components/MainComponent";


ReactDOM.render(
    <MainComponent/>,
    document.getElementById('content')
);
