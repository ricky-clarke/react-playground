import { useLocation } from 'react-router-dom';
import SpotifySidebar from '../sidebar/sidebar.component';
import SpotifyHeader from '../header/header.component';
import ArtistDiscography from './artist-discography/artist-discography.component';
// import ArtistAlbums from './artist-albums/artist-albums.component';
import ArtistPopular from './artist-popular/artist-popular.component';
import ArtistLastest from './artist-latest/artist-latest.component';

const SpotifyArtist = () => {

    const location = useLocation();
    const { state } = location;

    return(
        <>
            <div className="spotify_profile_container">

                <SpotifySidebar />

                <div>

                <SpotifyHeader name={state.artistName} logout='false' img={state.artistImg} />

                <div className="spotify_grid">
                    <div className='spotify_container'>
                        <div className="spotify_grid--50">
                        <ArtistLastest title="Latest" />
                        <ArtistPopular title="Popular" />
                        </div>
                    </div>

                    <div className='dark-bg'>
                        <div className='spotify_container'>
                            <ArtistDiscography title="Discography"/>
                        </div>
                    </div>
                    
                </div>

                </div>

            </div>
        </>
    )

}

export default SpotifyArtist;