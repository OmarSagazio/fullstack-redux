import '../node_modules/semantic-ui-css/semantic.min.css';
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';

import RxDashboard from '../public/components/RxDashboard.js';


ReactDOM.render(
    <RxDashboard />,
    document.getElementById('content')
);
