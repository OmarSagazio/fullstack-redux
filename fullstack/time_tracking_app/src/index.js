import '../node_modules/semantic-ui-css/semantic.min.css';
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';

import TimersDashboard from '../public/components/TimersDashboard.js';


ReactDOM.render(
    <TimersDashboard />,
    document.getElementById('content')
);
