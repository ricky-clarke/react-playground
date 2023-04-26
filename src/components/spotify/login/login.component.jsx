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

    return ( 
        <>
        <div className="spotify_login">
            <div className='container'>
                    <div>
                        <SpotifyLogo />
                        <div>
                            <a className='spotify_login_btn' href={loginURL}>Sign in</a>
                            </div> 
                    </div>
                </div>
        </div>
        </>

     );
}
 
export default SpotifyLogin;