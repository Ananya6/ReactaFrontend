import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RestaurantMenu from './routes/RestaurantMenu';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
      <Routes>
    <Route path="/" element={<App />} />
    <Route path="/restaurant/:id" element={<RestaurantMenu/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//<Route path="invoices" element={<Invoices />} />

//    <Route path="restaurant" element={<RestaurantMenu />} />
