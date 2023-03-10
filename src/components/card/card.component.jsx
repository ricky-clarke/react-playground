import { Link } from 'react-router-dom';
import './card.styles.scss';

const Card = ( { title, img, link }) => {

    return(
        <>
            <div className='card'>
                <div>
                    {img}
                     <h3>{ title }</h3>
                </div>
                <Link  to={ link } aria-label="View app"></Link>
            </div>
         </>
    )

}

export default Card