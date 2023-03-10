import './wp-post.styles.scss';

// import ImagePlaceholder from './g5-logo.svg';
import { Link } from "react-router-dom";

const WPPost = ({ id, title, post_date, img, link, category, post_type }) => {

  // Format the date
  const date = new Date(post_date)
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })


  return (

    <article id={`post_article--${id}`} className="post_article" data-category={category}>
      <div>
        <div className="post-article__img">
               {/* { img ? ( <img className="post_img" src={img} alt=""/>) : (<img className="post_img--holder" src={ImagePlaceholder} alt=""/>)} */}
        </div>
        <figcaption>
          <div>
            <p>{formattedDate}</p>
            <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
          </div>
        </figcaption>
        </div>

        <Link to={`/wp-posts/${id}`} aria-label="Read the article"></Link>

    </article>
  );
};

export default WPPost;