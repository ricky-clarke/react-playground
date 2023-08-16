import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import SpotifyCard from "../../card/card.component";
import SpotifyFetch from "../../spotify-fetch";
import '../../card/card.scss';
import 'swiper/swiper.min.css';
import "swiper/css/navigation";


const ProfileRecentlyPlayed = ({ title }) => {

    const { data } = SpotifyFetch('https://api.spotify.com/v1/me/player/recently-played?limit=12');

    // const carousel_params = {
    //     slidesPerView : 7,
    //     spaceBetween : 30,
    //     navigation : true,
    //     modules : Navigation,
    //     clickable : true,      
    // };

    return (
        <>
        <div>
            <h2>{title}</h2>

            <Swiper   
            slidesPerView={7}
            spaceBetween={30}
            navitagion={true}
            modules={Navigation}
            breakpoints={{
                10: {
                slidesPerView: 1,
                },
                500: {
                slidesPerView: 2,
                },
                700: {
                    slidesPerView: 3,
                },
                900: {
                    slidesPerView: 4,
                },
                1500: {
                    slidesPerView: 5,
                },
                1900: {
                slidesPerView: 7,
                },
                
                }}>

            { data && data.items.map((track, i) => {

                const track_name = track.track.name.length > 20 ? 
                track.track.name.substring(0, 15).concat('...') : 
                track.track.name;

                return( 
                    <SwiperSlide>
                            <SpotifyCard 
                            key_count = {i}
                            img = {track.track.album.images[1].url}
                            track_name = {track_name}
                            track_uri = {track.track.uri}
                            artist =  {track.track.artists[0].name}
                        //   artist_link = {`/spotify/artist/${data.items[i].track.artists[0].id`}
                            icon = 'true'
                        />
                  </SwiperSlide>
                )
                })
            }   

            </Swiper>
        </div>
         
        </>

      );
}
 
export default ProfileRecentlyPlayed;