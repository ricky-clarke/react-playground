import { useParams } from "react-router";
import SpotifyFetch from "../../spotify-fetch";
import TrackRow from "../../track-row/track-row.component";
import './artist-popular.scss';

const ArtistPopular = ({title}) => {

    let { id } = useParams(); // Get artist ID from URL
    const { data } = SpotifyFetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=GB&limit=4`);

    return (
        <>
        <div>
            <h2>{title}</h2>
            <div className="spotify_card spotify_card--popular">
                <div className="spotify_track_list">
                    { data && data.tracks.map((track, i) => {

                        return( 
                        <TrackRow
                        key_data={i}
                        img = {track.album.images[2].url}
                        track_uri = {track.uri}
                        track_name = { track.name}
                        track_duration = { track.duration_ms}
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
 
export default ArtistPopular;