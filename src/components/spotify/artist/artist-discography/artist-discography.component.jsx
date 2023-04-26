import { useState } from "react";
import { useParams } from "react-router";
import ArtistAlbums from "../artist-albums/artist-albums.component";
import ArtistSingles from "../artist-singles/artist-singles.component";
import '../../spotify.scss';

const ArtistDiscography = ({title, link}) => {

    let { id } = useParams(); // Get artist ID from URL

    const discographyTypes = ["Albums", "Singles"];
    const [discographyView, setDiscographyView] = useState('Albums');

    return (
        <>
        <div>
            <h2>{title}</h2>
            <div className="btn_wrapper">
                {discographyTypes.map((type) => (
                    <button key={type} onClick={() => setDiscographyView(type)} className={`btn ${discographyView == type ? 'btn--active' : null}`}>
                    {type}
                    </button>
                ))}
            </div>
            <br /><br />
           {discographyView === 'Albums' ? <ArtistAlbums artistID={id} /> : <ArtistSingles artistID={id} />}
        </div>
        </>

      );
}
 
export default ArtistDiscography;