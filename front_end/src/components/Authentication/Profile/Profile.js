import React, { useEffect } from 'react';
import {useAuth0} from '@auth0/auth0-react';

const Profile = () =>{
    const {user, isAuthenticated, getAccessTokenSilently, } = useAuth0();
    var accessToken = "";

    useEffect(() => {
        const getUserTokendata = async () => {
          const domain = "dev-l7o00ivv.eu.auth0.com";
      
          try {
            accessToken = await getAccessTokenSilently({
              audience: `https://${domain}/api/v2/`,
              scope: "read:current_user",
            });
            localStorage.setItem('accessToken', accessToken)
          } catch (e) {
            console.log(e.message);
          }
        };
        getUserTokendata();
      }, []);

      const getUserMetadata = async () => {    
        try {
          var access = localStorage.getItem('accessToken');

          const validateJWTURL = `http://localhost:5000/api/getTokenCheckAuthenticated`;
    
          await fetch(validateJWTURL, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${access}`,
              'Content-Type': 'application/json'
            },
          }).then(response => response.json())
          .then(data => console.log(data));
        } catch (e) {
          console.log(e.message);
        }
      };
    return(
        isAuthenticated && (
        <div>
            <img src={user.picture} alt={user.name}></img>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            {JSON.stringify(user, null, 2)}
            <button onClick={() => getUserMetadata ()}>Get User Metadata</button>

        </div>
        )
    )
}

export default Profile;

//#endregion
