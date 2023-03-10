import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import LoginFormStorage from './login-form.localstorage';
import './login-form.styles.scss';

const LoginForm = () => {

    const userDetails = useContext(UserContext);
    
    // Custom hook for login
    const [login, setLoginStatus] = LoginFormStorage('login', false);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        setLoginStatus(true);
        console.log(login);
    }


    return (
      <>
        { login === false &&
        <form className='login_form' onSubmit={formSubmitHandler}>
            <div>
                <label for="login_form__email">Login</label>
                <input type="email" name="login_email" className='login_form__email' id="login_form__email" required />
            </div>
            <div>
                <label for="login_form__password">Password</label>
                <input type="password" name="login_password" className='login_form__password' id="login_form__password" required />
            </div>
            <div>
                <input type="submit" value="Login" />
            </div>
        </form>
}
      </>
    );
};
  
  export default LoginForm;
  