import './header.scss';

const SpotifyHeader = ( { name, img, logout }) => {

    return ( 
        <>
        <div className="spotify_container spotify_container--header">
          <div className="spotify_header">
               <div className="spotify_header--left">
                    {img == null ? '' : <img width="100" height="100" src={img} alt="" />}
                    <h1>{name}</h1>
               </div>
           </div>
          </div>
        </>


     );
}
 
export default SpotifyHeader;