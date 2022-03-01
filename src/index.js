import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes, Route, Outlet } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RestaurantMenu from './routes/RestaurantMenu';
import Test from "./Test"
import Amplify, { Auth } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const rootElement = document.getElementById("root");

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}

ReactDOM.render(



  <BrowserRouter>
      <Routes>
      <Route path="/" element={<Dashboard />}>
      <Route path="test" element={<Test />} />
        <Route path="home" element={<App />} />
        
        <Route path="restaurant/:id" element={<RestaurantMenu/>}/>
    </Route>
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
