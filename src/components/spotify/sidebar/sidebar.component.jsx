import { useContext } from "react";
import SpotifyFetch from "../spotify-fetch";
import { Link } from 'react-router-dom';
import globalContext from '../../../context/global.context';
import './sidebar.scss';

const SpotifySidebar = ({ logout }) => {

    const { dispatch } =  useContext(globalContext);

    const logoutHandler = () => {

        dispatch({type:"SPOTIFY_TOKEN", payload: 'NONE' });
        window.location.replace("/spotify");
         localStorage.removeItem('spotify-token')
    }

    const { data } = SpotifyFetch('https://api.spotify.com/v1/me/playlists?limit=20');
  
    return ( 
        <>
            <aside className="spotify_sidebar">

                <div>

                <div>

                <div className='spotify_sidebar__top'>
                    <ul>
                        <li><Link to={`/spotify/`}>Profile</Link></li>
                        <li><button className="spotify_logout_link" onClick={logoutHandler}>Sign out</button></li>
                        {/* <li><Link to={`/`}>Search</Link></li> */}
                    </ul>

                    <hr />

                    <h4>Playlists</h4>

                    <ul>

                    { data && data.items.map((playlist, i) => {
                            return( 
                            <li key={i}>
                                <Link 
                                    to={`/spotify/playlist/${playlist.id}`}
                                    state={{ 
                                        playList_name:playlist.name, 
                                        playList_id: playlist.id,
                                        }}  >
                                            {playlist.name}
                                    </Link>
                            </li>
                            )
                            })
                        }

                         </ul>

                    </div>

                    <div>
                        <hr />
                    
                        <br></br><br/>
                        <Link to={`/`}>App home page</Link>
                     </div>

                </div>

                </div>
              
            </aside>
          
        </>
     );
}
 
export default SpotifySidebar;