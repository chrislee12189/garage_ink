import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import axios from 'axios';



//url of backend api.
axios.defaults.baseURL='https://fsatattoo-production.up.railway.app'




//if we  intercept request, it changes the request object before it hits the backend api
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})




ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)