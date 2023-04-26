import { useContext,useEffect, useState } from "react"; 
import globalContext from "../../context/global.context";

export const SpotifyFetch = ( url ) => {

    const [data, getData] = useState('');
    const { state } =  useContext(globalContext);
    const accessToken = state.spotifyToken;
    let token = localStorage.getItem('spotify-token')

    useEffect(() => {

        async function fetchData() {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + accessToken,
                        'Host' : 'api.spotify.com'
                    }
                }); 
                const data = await response.json();
                getData(data); // Set state with returned data
            } catch (e) {
                console.error(e);
            }
        };

        fetchData();

    }, [token]); // Might break!!!!!!!!!!!!!!!!!!!!!!!!

    return { data }


}

export default SpotifyFetch