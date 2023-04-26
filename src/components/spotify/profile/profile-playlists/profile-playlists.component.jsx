import SpotifyFetch from "../../spotify-fetch";
import SpotifyCard from "../../card/card.component";

const ProfilePlayLists = ({ title }) => {

  const { data } = SpotifyFetch('https://api.spotify.com/v1/me/playlists?limit=6');

  // const [data, setData] = useState('');
  // const { state } =  useContext(globalContext);
  // const url = 'https://api.spotify.com/v1/me/playlists?limit=5';

  // const APICall = {
  //     method: 'GET',
  //     headers: {
  //         'Accept': 'application/json',
  //         'Content-Type' : 'application/json',
  //         'Authorization': 'Bearer ' + state.spotifyToken,
  //     }
  // }

  // useEffect(() => {
  //     async function fetchData() {
  //         try {
  //             const response = await fetch(url, APICall);
  //             const data = await response.json();
  //             setData(data);
  //          // console.log(data);
  //         } catch (e) {
  //             console.error(e);
  //         }
  //     };
  //     fetchData();
  // }, [data, setData]);

    return ( 
        <>
        <div>
          <h2>{title}</h2>
          <div className="spotify_carousel">
          { data && data.items.map((playlist, i) => {
                return( 
                  <SpotifyCard 
                    key_count = {i}
                    img = {playlist.images[0].url}
                    track_name = {playlist.name}
                    track_uri = {playlist.uri}
                    icon = 'true'
                  />
                )
                })
            }
        </div>
        </div>
        </>

     );
}
 
export default ProfilePlayLists;