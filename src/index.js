import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main/components/Main';
import Header from './Main/components/Header';
import './Main/css/Common.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Main/>
  </React.StrictMode>
);