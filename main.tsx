import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container || document.body)

root.render(<App />);