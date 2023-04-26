import SpotifyFetch from "../spotify-fetch";
import SpotifySidebar from "../sidebar/sidebar.component";
import SpotifyHeader from "../header/header.component";
import ProfileRecentlyPlayed from "./profile-recently-played/recently-played.component";
import ProfilePlayLists from "./profile-playlists/profile-playlists.component";
import ProfileTopArtists from "./profile-top-artists/profile-top-artists.component";
import ProfileTopTracks from "./profile-top-tracks/profile-top-tracks.component";
import ProfileFollowing from "./profile-folllowing/profile-following.component";
import './profile.scss';

const SpotifyProfile = () => {

    const { data } = SpotifyFetch('https://api.spotify.com/v1/me');
    const { display_name } = data;

    return ( 
        <>
            <div className="spotify_profile_container">

                <SpotifySidebar />

                <div>

                    <SpotifyHeader name={display_name} img={null}  />         

                    <div className="spotify_grid">
                        <div className="spotify_container ">
                            <ProfileRecentlyPlayed title="Recently played" />
                        </div>

                        <div className="dark-bg">
                            <div className="spotify_container ">
                                <ProfilePlayLists title="Playlists"/> 
                            </div>
                        </div>

                        <div className="spotify_container ">
                            <div className="spotify_grid--50">
                                <ProfileTopTracks title="Top tracks"/>
                                <ProfileTopArtists title="Top artists"/>
                            </div>
                        </div>

                        <div className="dark-bg">
                            <div className="spotify_container ">
                                <ProfileFollowing title="Following"/>
                            </div>
                        </div>

                    </div>
                
                </div>

            </div>
        </>
     );
}
 
export default SpotifyProfile;