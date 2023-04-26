import { useContext } from 'react';
import globalContext from '../../context/global.context';

const SpotifyAccess = () => {



    const { state } =  useContext(globalContext);
    const { spotifyToken } = state;
    const storageAccess = localStorage.getItem('spotify-login');


    return(
        // <p>HERE</p>
           spotifyToken === storageAccess ? 'true' : console.log('Not equal')
     )

    // return(
    //     <div>
    //         <p>{state.spotifyToken}</p>
    //         <p style={{backgroundColor: "red"}}>{storageAccess}</p>
    //     </div>
    // )

}

export default SpotifyAccess