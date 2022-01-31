import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import Sample from './Sample';
// import ToDoList from "./ToDoList";
// import ToDoLists from  './ToDoLists';
// import reportWebVitals from './reportWebVitals';
// import TitleUseEffect from './TitleUseEffect';
// import Pokemon from './Pokemon';
// import Home from './Home';

// import Menu from './Menu';
import {BrowserRouter} from 'react-router-dom';

// import StateWiseCovidApi from './StateWiseCovidApi';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
