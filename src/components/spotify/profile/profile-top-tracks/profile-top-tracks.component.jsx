import SpotifyFetch from "../../spotify-fetch";
import TrackRow from "../../track-row/track-row.component";

const ProfileTopTracks = ({ title }) => {

  const { data } = SpotifyFetch('https://api.spotify.com/v1/me/top/tracks?limit=6');

    return ( 
        <>
            <div>
            <h2>{title}</h2>
            <div className="spotify_card spotify_card--popular">
                <div className="spotify_track_list">
                { data && data.items.map((track, i) => {
                        return( 
                            <TrackRow key={i}
                            img = {track.album.images[0].url}
                            track_uri = {track.uri}
                            track_name = {track.name}
                            track_duration = {track.duration_ms}
                            play_button = 'true'
                            />
                        )
                        })
                         }
                </div>
            </div>
        </div>
        </>

     );
}
 
export default ProfileTopTracks;