import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyDDIukHrRpIVEgYUUgyjKA8_O8wzWO-Dow",
   authDomain: "ecommerce-amarilla-mauricio.firebaseapp.com",
   projectId: "ecommerce-amarilla-mauricio",
   storageBucket: "ecommerce-amarilla-mauricio.appspot.com",
   messagingSenderId: "887686732611",
   appId: "1:887686732611:web:e4a1894eb12f8db3d06df6"
 };

 const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <App/>

 </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

