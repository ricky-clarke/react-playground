import { useParams } from "react-router";
import '../artist-popular/artist-popular.scss';
 import TrackRow from "../../track-row/track-row.component";

import SpotifyFetch from "../../spotify-fetch";

const ArtistLastest = ({title}) => {

    let { id } = useParams(); // Get artist ID from URL

    const { data } = SpotifyFetch(`https://api.spotify.com/v1/artists/${id}/albums?include_groups=single&market=GB&limit=10`);

    return (
        <>
        <div>
            <h2>{title}</h2>
            <div className="spotify_card spotify_card--popular">
                <div className="spotify_track_list">
                        { data && data.items.map((track, i) => {
                            return( 
                                <TrackRow key={i}
                                    img = {track.images[1].url}
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
 
export default ArtistLastest;