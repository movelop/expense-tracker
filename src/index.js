import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';

import App from './App';
import './index.css';

ReactDOM.render( 
    <SpeechProvider
        appId = 'f797b93e-6cc0-4f73-b9af-36d9a536b7d9'
        language = 'en-US'
    >
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);