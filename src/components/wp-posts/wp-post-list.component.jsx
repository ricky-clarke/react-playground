import WPPost from "./wp-post.component";
import './wp-post-list.styles.scss';

const WPPostList = ( { posts, post_type } ) => {

    return(

        <div id="cards" className="post_grid">            
            {posts.map((post, i) => {

                    return (
                        <WPPost
                        key={post?.id}
                        id={post?.id}
                        post_date={post?.date_gmt}
                        title = {post?.title.rendered}
                        link = {post?.link}         
                        img = {post && post._embedded && post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : null }
                        category = {post?.categories}
                        post_type = {post_type}
                        />
                    )
                })
            }
       </div>
    )

}

export default WPPostList