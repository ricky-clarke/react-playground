import { useContext, useState } from 'react'; 
import { Link } from 'react-router-dom';
import globalContext from '../../../context/global.context';
import { PlayIcon } from '../../svgs/play-icon.svg';
import PlayingAnimation from '../playing-animation/playing-animation.component';
import './track-row.scss';

const TrackRow = ({ key_data, img, track_name, track_uri, track_duration, play_button, artist_id }) => {

  const { dispatch } =  useContext(globalContext);

  const [activeTrack, activeTrackHandler] = useState(false);

  const storageTrack = localStorage.getItem('spotify-current-track');

  const PlayTrack = (event) => {
     dispatch({type:"SPOTIFY_TRACK_URI", payload:track_uri });
     activeTrackHandler(true);
     localStorage.setItem('spotify-current-track', track_uri);
  }

const milliseconds = track_duration;
const seconds = Math.floor((milliseconds / 1000) % 60);
const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
const duration = minutes + ':' + seconds;

    return (
        <div id={track_uri} className={"spotify_track " + (storageTrack === track_uri ? 'track--playing' : '')} key={key_data}>
              <div>
              {storageTrack == track_uri ? <PlayingAnimation /> : <img src={img} alt="" />}
              { play_button == 'true' && <PlayIcon />  }
              </div>
              <h3><span>{track_name.length > 50 ? track_name.substring(0, 50).concat('...') : track_name }</span> {track_duration && <span>{duration}</span>}</h3>
              {activeTrack && <p>{activeTrack}</p> }
             {play_button == 'true' ? <button onClick={PlayTrack} ></button> :  <Link to={`/spotify/artist/${artist_id}`} state={{ 
                        artistName: track_name, 
                        artistID: artist_id,
                        artistImg : img
                         }}></Link> }
        </div>  
      );

   
}
 
export default TrackRow;