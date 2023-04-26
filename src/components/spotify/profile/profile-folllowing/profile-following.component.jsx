import { Link } from "react-router-dom";
import SpotifyFetch from "../../spotify-fetch";
import './profile-following.scss';

const ProfileFollowing = ({ title }) => {

    const { data } = SpotifyFetch('https://api.spotify.com/v1/me/following?type=artist&limit=14&locale=en-GB');

    return (
        <>
        <div>
            <h2>{title}</h2>
            <div className="spotify_carousel spotify_carousel--7">
            { data && data.artists.items.map((artist, i) => {
                return( 
                    <div className="spotify_card spotify_card--following" key={i}>
                       <Link 
                       to={`/spotify/artist/${artist.id}`}
                       state={{ 
                        artistName:artist.name, 
                        artistID: artist.id,
                        artistImg : artist.images[2].url
                         }}  >
                            <div><img src={artist.images[1].url} alt="" /></div>
                            <h3><b>{artist.name}</b></h3>
                        </Link>
                    </div>
                )
                })
            }
            </div>
        </div>
        </>

      );
}
 
export default ProfileFollowing;