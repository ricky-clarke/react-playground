import { useContext } from "react";
import globalContext from "../../../context/global.context";
import { PlayIcon } from "../../svgs/play-icon.svg";

const SpotifyCard = ( { key_count, img, track_name, icon, release_date, artist, track_uri}) => {

    const { dispatch } =  useContext(globalContext);

    const PlayTrack = () => {
        dispatch({type:"SPOTIFY_TRACK_URI", payload:track_uri });
    }

    return ( 

        <div className="spotify_card spotify_card--following" key={key_count}>
            <div>
                <img src={img} alt="" />
                {icon === 'true' &&  <button className="spotify_play_button" onClick={PlayTrack}><PlayIcon /></button> }
            </div>
            <h3><b>{track_name }</b></h3>
            {release_date && <p>{release_date}</p>}
            {artist && <p>{artist}</p>}
        </div>

     );
}
 
export default SpotifyCard;


