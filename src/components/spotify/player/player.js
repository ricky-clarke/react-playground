import './player.scss';
import { useContext, useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import globalContext from '../../../context/global.context';

export const Player = ( { track_url } ) => {

  const { state } =  useContext(globalContext);
//  const track = state.spotifyTrackURI;
 const [play, setPlay] = useState(false);
 // let token = localStorage.getItem('spotify-token')


useEffect(() => {
  // Run each time new track/album/playlist selected to play
  setPlay(true)
}, [track_url]);

  return ( 
  
      <SpotifyPlayer
        token={state.spotifyToken}
        uris={track_url}
        callback={ state => {
          if(!state.isPlaying) setPlay(false)
        }}
        play={play}
        autoPlay={false} 
        hideAttribution={true}
        initialVolume= '2'
        styles={{
            activeColor: '#fff',
            bgColor: '#000000',
            color: '#fff',
            loaderColor: '#fff',
            sliderColor: '#1cb954',
            trackArtistColor: '#ccc',
            trackNameColor: '#fff',
          }}
        />

  )



}

export default Player;