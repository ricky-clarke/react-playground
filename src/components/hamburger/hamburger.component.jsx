import {  useContext } from 'react';
import { globalContext } from '../../context/global.context';

import './hamburger.styles.scss';

const Hamburger = () => {

    const { state, dispatch } =  useContext(globalContext);

    // Onclick handler
    const OpenMenuHandler = (event) => {

         if(state.menuOpen === true) {
             dispatch({type:"MENU_OPEN", payload: false });
             document.getElementById('menu').classList.remove('nav--open');
         }
         else {
             dispatch({type:"MENU_OPEN", payload: true });
             document.getElementById('menu').classList.add('nav--open');
         }

    }

    return ( 
        <>
        <div>
            <button className='hamburger_button' onClick={OpenMenuHandler}>
            {state.menuOpen === false ? 'Menu' : 'Close' }
            </button>
            </div>
        </>
     );
}
 
export default Hamburger;