// Used to fetch API URL
import { useState, useEffect } from 'react';

const UseFetch = (url) => {

     // Set state
     const [data, setData] = useState(null);
 
       // Fetch posts on inital render
        useEffect( () => {
            fetch(url, 
                { 
                   cache: "force-cache"
               })
                .then((response) => response.json()) // passed json into JS obj
                // Get the data
                .then(data => {
                    setData(data)
                })
            }, [url]);
        
            return { data }

}

export default UseFetch