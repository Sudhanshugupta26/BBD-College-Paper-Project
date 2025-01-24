// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { injectContentsquareScript } from '@contentsquare/tag-sdk';

// Inject the ContentSquare script
injectContentsquareScript({
    siteId: "5261163",
    async: true,
    defer: false,
});

// Render the React application
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
