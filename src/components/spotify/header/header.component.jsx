// import { useContext } from "react";
// import { useLocation } from "react-router";
// import { Link } from "react-router-dom";
// import globalContext from '../../../context/global.context';
import './header.scss';

const SpotifyHeader = ( { name, img, logout }) => {

  //  const { dispatch } =  useContext(globalContext);

  //  const location = useLocation();
   // const { state } = location;

    return ( 
        <>
        <div className="spotify_container spotify_container--header">
         <div className="spotify_header">

                    <div className="spotify_header--left">
                     {img == null ? '' : <img width="100" height="100" src={img} alt="" />}
                     <h1>{name}</h1>
                       
                    </div>
                    {/* <div className="spotify_header--right">
                         <p>Albums</p>
                        <p>Playlists</p>
                        <p>Following</p>
                         <Link to={`/spotify/`}>Profile</Link>
                         {logout == true && <button className="spotify_logout_link" onClick={logoutHandler}>Not you? Logout</button> }
                    </div> */}
                </div>
                </div>
        </>


     );
}
 
export default SpotifyHeader;