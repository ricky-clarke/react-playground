import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import globalContext from '../../../../context/global.context';
import '../../card/card.scss';

const ArtistAbout = ({title}) => {

    let { id } = useParams(); // Get artist ID from URL
    const [data, setData] = useState('');
    const { state } =  useContext(globalContext);
    const url = `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album&market=GB&limit=6`;

    const APICall = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + state.spotifyToken,
            'Host' : 'api.spotify.com',
            'Content-Type' : 'application/json'
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url, APICall);
                const data = await response.json();
                setData(data);
             //   console.log(data)
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);
    
    return (
        <>
        <div>
            <h2>{title}</h2>
            <div className="spotify_card">
                About
            </div>
        </div>
        </>

      );
}
 
export default ArtistAbout;