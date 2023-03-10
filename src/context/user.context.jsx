import { useState, createContext } from "react";

export const UserContext = createContext(undefined);

const UserProvider = ({ children }) => {

    const [userDetails, setUserDetails] = useState({
      username: "Jonny",
      password: "12345",
    });
  
    return (
      <UserContext.Provider value={userDetails}>{children}</UserContext.Provider>
    );
  }

  export default UserProvider;