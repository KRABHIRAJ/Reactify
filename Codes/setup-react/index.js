import React from 'react';
import ReactDOM from 'react-dom';

const parent = React.createElement('div', {id:'parent-first'}, [React.createElement('h1', {}, 'First Heading'), React.createElement('h2', {}, 'Second Heading')])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);