import { useParams } from 'react-router-dom'; 
import UseFetch from '../../components/use-fetch/use-fetch.component';

import './wp-post-single.styles.scss';

const SinglePost = () => {

    const { id } = useParams();

    const { data } = UseFetch('https://www.granite5.com/wp-json/wp/v2/posts/' + id + '/?_fields=id,title,content,link,_links,_embedded&_embed');
    
    return(
        <div className="wp_post_single container">
            <h1>{ data?.title.rendered }</h1>
           <div dangerouslySetInnerHTML={{ __html: data?.content.rendered }}></div>
        </div>
    )

}

export default SinglePost;