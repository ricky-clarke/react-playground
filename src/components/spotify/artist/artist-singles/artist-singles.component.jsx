import SpotifyFetch from "../../spotify-fetch";
import SpotifyCard from "../../card/card.component";

const ArtistSingles= ({artistID}) => {

   const { data } = SpotifyFetch(`https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=single&market=GB&limit=12`);

    return (
        <>
        <div>
            <div className="spotify_carousel">
            { data && data.items.map((album, i) => {
                return( 
                    <SpotifyCard 
                    key_count = {i}
                    img = {album.images[1].url}
                    track_name = {album.name}
                     track_uri = {album.uri}
                    icon = 'true'
                    release_date = {album.release_date.split('-')[0]}
                  />

                )
                })
            }
            </div>
        </div>
        </>

      );
}
 
export default ArtistSingles;