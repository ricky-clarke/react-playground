import SpotifyFetch from "../../spotify-fetch";
import TrackRow from "../../track-row/track-row.component";

const ProfileTopArtists = ({ title }) => {

  const { data } = SpotifyFetch('https://api.spotify.com/v1/me/top/artists?limit=6');

    return ( 
        <>
            <div>
            <h2>{title}</h2>
            <div className="spotify_card spotify_card--popular">
                <div className="spotify_track_list">
                { data && data.items.map((playlist, i) => {
                        return( 
                            <TrackRow
                            key_count = {i}
                            img = {playlist.images[0].url}
                            track_uri = ''
                            track_name = {playlist.name}
                            track_duration = ''
                            play_button = {false}
                            artist_id = {playlist.id}
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
 
export default ProfileTopArtists;