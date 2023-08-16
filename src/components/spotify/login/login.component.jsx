import { useEffect, useContext } from 'react';
import globalContext from '../../../context/global.context';
import { loginURL } from '../spotify-auth';
import './login.styles.scss';
import { SpotifyLogo } from '../../svgs/spotify-logo';

const SpotifyLogin = () => {

    const { state, dispatch } =  useContext(globalContext);

    useEffect(() => {

        const hash = window.location.hash;

        if(hash) {
            const token = hash.substring(1).split('&')[0].split('=')[1];
            dispatch({type:"SPOTIFY_TOKEN", payload: token });
            localStorage.setItem('spotify-login', 'true')
        }
        else {
            console.log('no token');
        }
    }, [state.spotifyToken]);

    // const test_handler = () => {

    //     // random string with a length between 43 and 128 characters
    //     function generateRandomString(length) {
    //         let text = '';
    //         let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        
    //         for (let i = 0; i < length; i++) {
    //         text += possible.charAt(Math.floor(Math.random() * possible.length));
    //         }
    //         return text;
    //     }

    //      //   const digest = await window.crypto.subtle.digest('SHA-256', data);

    //      // returns the base64 
    //     async function generateCodeChallenge(codeVerifier) {
    //         function base64encode(string) {
    //         return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
    //             .replace(/\+/g, '-')
    //             .replace(/\//g, '_')
    //             .replace(/=+$/, '');
    //         }
        
    //         const encoder = new TextEncoder();
    //         const data = encoder.encode(codeVerifier);
    //         const digest = await window.crypto.subtle.digest('SHA-256', data);
        
    //         return base64encode(digest);
    //     }

    //     // request the user authorization
    //     let codeVerifier = generateRandomString(128);

    //     generateCodeChallenge(codeVerifier).then(codeChallenge => {
    //         let state = generateRandomString(16);
    //         let scope = 'user-read-private user-read-email';
        
    //         localStorage.setItem('code_verifier', codeVerifier);
        
    //         let args = new URLSearchParams({
    //         response_type: 'code',
    //         client_id: 'b496c2ceab6549fbb074dbb8d634d916',
    //         scope: scope,
    //         redirect_uri: 'http://localhost:3000/spotify',
    //         state: state,
    //         code_challenge_method: 'S256',
    //         code_challenge: codeChallenge
    //         });
        
    //         window.location = 'https://accounts.spotify.com/authorize?' + args;
    //     });

    //     // parse the URL and save the code parameter to request the access token afterwards
    //     const urlParams = new URLSearchParams(window.location.search);
    //     let code = urlParams.get('code');

    //     // request an access token by making a POST request to the /api/token endpoint, with the code and the code verifier values.
    //     let codeVerifierrrr = localStorage.getItem('code_verifier');

    //     let body = new URLSearchParams({
    //     grant_type: 'authorization_code',
    //     code: code,
    //     redirect_uri: 'http://localhost:3000/spotify',
    //     client_id: 'b496c2ceab6549fbb074dbb8d634d916',
    //     code_verifier: codeVerifierrrr
    //     });

    //     const response = fetch('https://accounts.spotify.com/api/token', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         body: body
    //         })
    //         .then(response => {
    //             if (!response.ok) {
    //             throw new Error('HTTP status ' + response.status);
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             localStorage.setItem('access_token', data.access_token);
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });

    // }

    return ( 
        <>
        <div className="spotify_login">
            <div className='container'>
                    <div>
                        <SpotifyLogo />
                        <div>
                            {/* <button className='spotify_login_btn' onClick={test_handler}>NEW LOGIN</button> */}
                            <a className='spotify_login_btn' href={loginURL}>Sign in</a>
                            <p>Premium users only</p>
                        </div> 
                    </div>
                </div>
        </div>
        </>

     );
}
 
export default SpotifyLogin;