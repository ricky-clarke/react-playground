import { Link } from "react-router-dom";
import './header.styles.scss';
import Navigation from '../navigation/navigation.component';
import Hamburger from "../hamburger/hamburger.component";
import ContrastButton from "../contrast-button/contrast-button-component";
import logo from '../../logo.svg';

const Header = () => {
    
    return(
            <header>

                <Link to='/'>
                    <div className='header__logo'>
                        <img src={logo} className="App-logo" alt="logo" /> <span>React playground</span>
                    </div>
                </Link>

                <div className="header__buttons">
                    <ContrastButton />
                    <Hamburger />
                </div>

                <Navigation />
                
            </header>
        
    )

}

export default Header