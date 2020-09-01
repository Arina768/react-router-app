import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './style.css';

import {Main} from "./components/Main";


export const App = () => (
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
);
