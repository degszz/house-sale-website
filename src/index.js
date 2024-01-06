import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
    >
        <App />
    </ThemeProvider>
);
