import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import App from './App';
axios.defaults.baseURL = 'http://localhost:3900/api';
ReactDOM.render(<App />,document.getElementById('root')); 
