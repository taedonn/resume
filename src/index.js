import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/main';
import Header from './components/header';
import './css/common.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Main/>
  </React.StrictMode>
);