import WPPosts from "../../components/wp-posts/wp-posts.component"

const WPposts = () => {

    return (
        <>
            <div className="container">
                <h1>WP Posts</h1>
                <p>WordPress posts pulled in from granite5.com via the WP API</p>
                <br/><br/><br />
                <WPPosts />
            </div>
        </>
    )

}

export default WPposts