import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.scss';
import App from './components/App';
import registerServiceWorker from './serviceworker/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
