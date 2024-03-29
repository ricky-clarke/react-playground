import { Link } from "react-router-dom";
import './header.styles.scss';
import Navigation from '../navigation/navigation.component';
import Hamburger from "../hamburger/hamburger.component";
import ContrastButton from "../contrast-button/contrast-button-component";
import logo from '../../logo.svg';

const Header = () => {
    
    return(
            <header>

                <div className='header__logo'>
                    <Link to='/'>
                        <img src={logo} className="App-logo" alt="logo" /> <span>React playground</span>
                    </Link>
                </div>


                <div className="header__buttons">
                    <ContrastButton />
                    <Hamburger />
                </div>

                <Navigation />
                
            </header>
        
    )

}

export default Header