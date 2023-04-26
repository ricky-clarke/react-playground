// import { useState, useEffect } from "react";
// import { APICall } from "../spotify-auth";
// import SpotifyPlaylistTrack from "./spotify-playlist-track.component";

import { fiddy } from '../fiddy';

import './spotify-playlist.styles.scss';

const SpotifyPlaylist = () => {

    console.log(fiddy)

    return(
        <h1>Fidy</h1>
    )

    // const [data, setData] = useState('');
    
    // const playListID = '37i9dQZF1DXa1BeMIGX5Du';

    // const url = 'https://api.spotify.com/v1/playlists/'+playListID;

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await fetch(url, APICall);
    //             const data = await response.json();
    //             setData(data);
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     };
    //     fetchData();
    // }, []);

    // const tracks = data.tracks;

    // console.log(tracks);

    // return(
    //     <>
    //         { data &&
    //             <div className="spotify_playlist">
    //                 <div className="spotify_playlist__info">
    //                     <img src={data.images[0].url} alt={data.name} />

    //                     <p className="spotify_playlist__desc">{data.description}</p>
    //                     <p> {data.followers['total']} <b>Likes</b> <br/> {tracks.items.length} <b>Songs</b></p>
    //                 </div>

    //                 <div className="spotify_playlist__tracks">
    //                     {data.tracks.items.map((post, i) => {
    //                             return(
    //                                 <SpotifyPlaylistTrack
    //                                     key={i}
    //                                     track={tracks.items[i].track['name']}
    //                                     artist={tracks.items[i].track['artists'][0].name}
    //                                     artist_id={tracks.items[i].track['artists'][0].id}
    //                                     img={tracks.items[i].track['album']['images'][2].url}
    //                                     preview={tracks.items[i].track['preview_url']}
    //                                 />
    //                             )
    //                         })
    //                     }
    //                 </div>
    //             </div>
    //         }
    //     </>
    // )

}

export default SpotifyPlaylist