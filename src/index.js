import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProviderContextComponent from './components/ProviderContextComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ProviderContextComponent>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProviderContextComponent>
);
