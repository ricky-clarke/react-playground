
import { Link } from "react-router-dom";

const SpotifyPlaylistTrack = ( { id, artist, artist_id, track, img }) => {

    return(
        <>
            <div className="spotify_playlist__track" key={id}>
                <div>
                    <img src={img} alt=""/>
                </div>
                <p>
                    <b>{track}</b><br/>
                    <Link to={artist_id} aria-label="View artist's page">{artist}</Link>
                </p>
                {/* <iframe src={tracks.items[i].track['preview_url']} /> */}
            </div>
        </>
    )

}

export default SpotifyPlaylistTrack;