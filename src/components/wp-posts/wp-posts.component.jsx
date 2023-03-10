import UseFetch from "../use-fetch/use-fetch.component";
import WPPostList from "./wp-post-list.component";

const WPPosts = () => {

    const { data } = UseFetch('https://www.granite5.com/wp-json/wp/v2/posts?_fields=id,date_gmt,title,link,_links,_embedded&_embed&per_page=10');

    return ( 

        <>
            {data && <WPPostList posts={data} /> }
        </>

     );
}
 
export default WPPosts;