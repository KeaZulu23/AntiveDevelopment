import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "@fortawesome/fontawesome-free/css/all.min.css";
import posthog from 'posthog-js'; // new
import { BrowserRouter } from 'react-router-dom';


posthog.init( // new
  '<ph_project_api_key>', { api_host: '<ph_instance_address>' }
) 

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


