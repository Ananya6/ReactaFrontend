import React,  { useState, useEffect }from 'react';
import Amplify, { Auth } from 'aws-amplify';
import {Authenticator, useAuthenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import '../css/NavStyles.css'
import { Outlet } from "react-router-dom";

const Logout=()=>{
    return(

    <ul className="nav navbar-nav navbar-right"><li><button type="button" className="btn btn-sm navbar-btn btn-outline-secondary" align="right" id="register" onclick="location.href = '/logout';">Logout</button></li></ul>

    )
}

const Login=()=>{
    return(
        <ul className="nav navbar-nav navbar-right">
                <li><button type="button" className="btn btn-sm navbar-btn btn-outline-secondary" align="right" id="register" onclick="location.href = '/register';">Register</button></li>
          <li><button className="btn btn-sm navbar-btn btn-outline-secondary" align="right" type="button" onclick="location.href = '/login';">Login</button></li>
          </ul>
    )
}



const Navbar=()=>{
    const { route } = useAuthenticator((context) => [context.route]);
    let button;

    button=(route === 'authenticated')?<Logout/>:<Login/>
    
    const greeting="hello";

    return(
        <div>
    <nav className="navbar navbar-default navbar-light">
        <div className="container-fluid">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/home">LOGO<span className="sr-only">(current)</span></a>
          </div>
      
          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="./menu">Menu </a></li>
              <li><a href="#">Loyalty Program</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#bottom" id="contact">Contact Us</a></li>
              <li><a href="./create-your-own-meal">Create your own meal</a></li>
            </ul>
      
            {/* <ul className="nav navbar-nav navbar-right">
              {/* <li className="shop-cart">
                <a href="/cart" align="right">
                  <i className="fa fa-shopping-cart cart-icon" aria-hidden="true" style="padding: 10px 28px 2px 12px"></i>
                  <span className="badge">{{session.cart.totalQty}}</span>
                </a>
              </li> 
              

    </ul> */}
    {button}
    
          </div>
        </div>
      </nav>
      
      </div>
    )
    
}

export default function NavbarWithAuth() {
    return (
        <div>
      <Authenticator.Provider>
        <Navbar/>
      </Authenticator.Provider>
      <Outlet />
      </div>
    );
  }

  