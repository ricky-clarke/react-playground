import SpotifyLogin from "../../components/spotify/login/login.component"
import SpotifyProfile from "../../components/spotify/profile/profile.component";
import { useContext } from 'react';
import { globalContext } from '../../context/global.context';
import './spotify-globals.scss';

const Spotify = () => {

    const { state } =  useContext(globalContext);
  //  let token = localStorage.getItem('spotify-token')

    return  (
        <>
        { state.spotifyToken ?  <SpotifyProfile /> : <SpotifyLogin /> }
        </>
    )

}

export default Spotify;