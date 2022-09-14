import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Route } from 'react-router-dom';
import './index.scss';
import App from './App';
import 'macro-css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Route>
      
        <App />  
      
      
    </Route>
  </React.StrictMode>
);

