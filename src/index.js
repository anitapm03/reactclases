import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './components/App';
import reportWebVitals from './reportWebVitals';
//import Contador from './components/Contador';
//import DibujosComplejos from './components/DibujosComplejos';
import DibujosComplejosReact from './components/DibujosComplejosReact';
import PadreDeportes from './components/PadreDeportes';
import SumaPadre from './components/SumaPadre';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SumaPadre />
   

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
