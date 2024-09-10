import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';



ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <App  />
    </StyledEngineProvider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
