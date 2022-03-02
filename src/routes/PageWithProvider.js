{/* import React,  { useState, useEffect }from 'react';
import Amplify, { Auth } from 'aws-amplify';
import {Authenticator, useAuthenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

const Home = () => {
    const { user, signOut } = useAuthenticator((context) => [context.user]);
  
    return (
      <>
        <h2>Welcome, {user.username}!</h2>
        <button onClick={signOut}>Sign Out</button>
      </>
    );
  };
  
  const Login = () => {return(<div className="App">
  <header className="App-header">
  <Authenticator/>
      </header>
      </div>
      )
  };
  
  function Page() {
    const { route } = useAuthenticator((context) => [context.route]);
    return route === 'authenticated' ? <Home /> : <Login />;
  }
  
  export default function PageWithProvider() {
    return (
      <Authenticator.Provider>
        <Page></Page>
      </Authenticator.Provider>
    );
  }
*/}