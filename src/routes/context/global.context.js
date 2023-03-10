import { useContext } from "react";
import { globalContext } from '../../context/global.context';

const GlobalContext = () => {
  
  const { state } = useContext(globalContext);
  
  return (
    <>
         <div className="container">
            {/* <h1>{isLoggedIn ? "Welcome back" : "Please login"}</h1>
             <button onClick={login}> Login </button>
            <button onClick={logout}> Logout </button>*/}
         {state.contrastButton === 'dark' ? ' Contrast dark' : 'Contrast light' }
         <br></br>
          {state.menuOpen === false ? 'Menu open' : 'Menu closed' }
        </div>
    </>
  );
};

export default GlobalContext;