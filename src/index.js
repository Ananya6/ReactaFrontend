import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RestaurantMenu from './routes/RestaurantMenu';
import Login from "./routes/Login"
import Amplify, { Auth } from 'aws-amplify';
import {Authenticator, useAuthenticator} from '@aws-amplify/ui-react'
import PageWithProvider from './routes/PageWithProvider';
import Navbar from './components/Navbar';
import NavbarWithAuth from './components/Navbar';
import GetCart from './routes/GetCart';
import Checkout from './routes/Checkout';
import Order from "./routes/OrderPlaced"

const rootElement = document.getElementById("root");

Amplify.configure({
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      //  identityPoolId: 'ap-southeast-1:d9533748-bc35-40b6-8e97-4ad58270f27c',
        
        // REQUIRED - Amazon Cognito Region
        region: 'ap-southeast-1',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'ap-southeast-1_B0EhWzL6o',

        userPoolWebClientId: '487vfhufrc9rp84a6st8hrme7b',

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,
    }
});

Amplify.configure({
  API: {
      endpoints: [
          {
              name: "apigwserverless",
              endpoint: "https://8jygdy9ae3.execute-api.ap-southeast-1.amazonaws.com"
          }
      ]
  }
});



ReactDOM.render(
  <div>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarWithAuth />} >
            <Route path="home" element={<App />} />
          <Route path="login" element={<PageWithProvider/>} />
          <Route path="restaurant/:id" element={<RestaurantMenu/>}/>
          <Route path="/cart" element={<GetCart/>}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/order" element={<Order />}/>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  ,
  rootElement
);
 
reportWebVitals();



//    <Route path="restaurant" element={<RestaurantMenu />} />
