import { useContext } from 'react';
import { UserContext } from "../../context/user.context";
import LoginForm from "../../components/login-form/login-form.component";
import './dashboard.styles.scss';

const Dashboard = () => {

    const value = useContext(UserContext);  

    return(
        <>
            <div>
                <div style={{ backgroundColor: "red", color: "white", padding: "1rem"}}><h3>TEST</h3>
                { value.username } <br></br>
                </div>
              <LoginForm />
            </div>
        </>
    )

}

export default Dashboard;