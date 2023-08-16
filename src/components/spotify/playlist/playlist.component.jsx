// import { useContext } from "react";
import SpotifyFetch from "../spotify-fetch";
import { useLocation } from 'react-router-dom';
import SpotifyHeader from "../header/header.component";
import SpotifySidebar from "../sidebar/sidebar.component";
import TrackRow from "../track-row/track-row.component";

const PlayList = () => {

     const location = useLocation();
     const { state } = location;

    const { data } = SpotifyFetch(`https://api.spotify.com/v1/playlists/${state.playList_id}`);

    return (
        <>
            <div className="spotify_profile_container">
                <SpotifySidebar />
                <div className="spotify_profile__right">
                    <SpotifyHeader name={state.playList_name} img="" />
                    <div className="spotify_grid">
                        <div className='spotify_container'>
                            <div className="spotify_grid--50">
                                
                                <div className="spotify_track_list">

                                    {/* { data['tracks']['items'].map((get_track, i) => {

                                    return( 

                                        <TrackRow key={i}
                                            img = {get_track.track.album.images[1].url}
                                            track_uri = {get_track.uri}
                                            track_name = { get_track.track['name']}
                                            track_duration = { get_track.track.duration_ms}
                                            play_button = 'true'
                                        />
                                        
                                    )
                                    })
                                }  */}
                            
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>

      );
}
 
export default PlayList;