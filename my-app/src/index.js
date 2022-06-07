import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import App from './ref/Index'//ref
import Index from './children/Index'//props.children
import Binding from './binding/Index'//双向数据绑定
import Cycle from './cycle/Index'//生命周期
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cycle name='22223'/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
