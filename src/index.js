import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from './redux/store';
import App from "./App";

ReactDOM, render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
