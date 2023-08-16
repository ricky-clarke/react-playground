import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import SpotifyFetch from "../../spotify-fetch";
import SpotifyCard from "../../card/card.component";
import 'swiper/swiper.min.css';
import "swiper/css/navigation";

const ProfilePlayLists = ({ title }) => {

  const { data } = SpotifyFetch('https://api.spotify.com/v1/me/playlists?limit=12');

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
          { data && data.items.map((playlist, i) => {
                return( 
                  <SwiperSlide key={i}>
                  <SpotifyCard 
                    img = {playlist.images[0].url}
                    track_name = {playlist.name}
                    track_uri = {playlist.uri}
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
 
export default ProfilePlayLists;