// import { useEffect, useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import globalContext from '../../../../context/global.context';
import SpotifyCard from "../../card/card.component";
import '../../card/card.scss';
import SpotifyFetch from "../../spotify-fetch";

const ProfileRecentlyPlayed = ({ title }) => {

    const { data } = SpotifyFetch('https://api.spotify.com/v1/me/player/recently-played?limit=6');

    return (
        <>
        <div className="">
            <h2>{title}</h2>

            <div className="spotify_carousel">
                
            { data && data.items.map((track, i) => {

                const track_name = track.track.name.length > 30 ? 
                track.track.name.substring(0, 25).concat('...') : 
                track.track.name;

                return( 

                    <SpotifyCard 
                    key_count = {i}
                    img = {track.track.album.images[1].url}
                    track_name = {track_name}
                    track_uri = {track.track.uri}
                    artist =  {track.track.artists[0].name}
                 //   artist_link = {`/spotify/artist/${data.items[i].track.artists[0].id`}
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
 
export default ProfileRecentlyPlayed;