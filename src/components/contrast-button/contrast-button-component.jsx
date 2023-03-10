import {  useContext } from 'react';
import { globalContext } from '../../context/global.context';
import './contrast.styles.scss';

const ContrastButton = () => {

    const { state, dispatch } =  useContext(globalContext);

    const contrastButtonHandler = (event) => {

        if(state.contrastButton === 'dark') {
            dispatch({type:"CONTRAST", payload: 'light' });

            document.querySelector('body').classList.add('theme_light');

            document.querySelector('.contrast_button--dark').classList.remove('contrast_button--active');

            document.querySelector('.contrast_button--light').classList.add('contrast_button--active');
        }
        else {
            dispatch({type:"CONTRAST", payload: 'dark' });

            document.querySelector('body').classList.remove('theme_light');

            document.querySelector('.contrast_button--light').classList.remove('contrast_button--active');
            
            document.querySelector('.contrast_button--dark').classList.add('contrast_button--active');
        }

    }

    return ( 

        <>
            {/* <label className='contrast_button_label'>Contrast</label> */}
            <button className='contrast_button' onClick={contrastButtonHandler}>
                <span className='contrast_button--dark contrast_button--active'>Dark</span> / <span className='contrast_button--light'>Light</span>
            </button>
        </>

     );
}
 
export default ContrastButton;