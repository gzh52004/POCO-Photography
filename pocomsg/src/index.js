import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import './assets/css/index.css';
import App from './App';
import 'antd/dist/antd.css';
// import {Provider} from './components/Hook/store'

// 根据环境不同切换不同的路由模式
// process.env.NODE_ENV： development, production
// const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

ReactDOM.render(
 
        <HashRouter>
            <App/>
        </HashRouter>
  
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
