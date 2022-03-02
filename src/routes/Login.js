import React,  { useState, useEffect }from 'react';
import Amplify, { Auth } from 'aws-amplify';
import {Authenticator, useAuthenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

export default function Login(){


    // const [route, greeting] = useState("Hello");
    // let { id } = useParams();
    // const { route } = useAuthenticator(context => [context.route]);
    //   const { user, signOut } = useAuthenticator((context) => [context.user]);
    
    
    // useEffect(() => {
      
    // console.log("User \n"+user);
    // console.log("Authenticated Route? \n"+route);
    
    // });

      return(
        <Authenticator>
        {({ signOut, user }) => (
          
          <div className="App">
            {/* <header className="App-header"> */}
            <p>
              Hey {user.username}, welcome to my channel, with auth!
            </p>
            
            <button onClick={signOut}>Sign out</button>
            {/* /</header> */}
          </div>  
    
      )}
      
    </Authenticator>
    )
}