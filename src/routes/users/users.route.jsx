import React, { useState, useEffect } from "react";
import UserList from "../../components/userList/UserList.component";
import SearchField from "../../components/search-field/search-field.component";

const Users = () => {

    // State
    const [users, setUsers] = useState( [] )
    const [searchfield, setSearchfield] = useState( ' ' )

   const api_path = 'https://jsonplaceholder.typicode.com/users';

    // Fetch users on inital render
    useEffect( () => {
        fetch(api_path)
        .then((response) => response.json())
        .then((users) => setUsers(users));
    }, []); // No dependancy - only call this function on mount

const onSearchChange = (event) => {
    //  change search field state
    setSearchfield(event.target.value)
}

    // Communitcate search input value with robots list 
    const filteredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(searchfield.toLowerCase());
    })


    return !users.length ?
        <h1>Loading</h1> :
            <div className="container">
             <SearchField searchChange={onSearchChange} />
             <UserList users={filteredUsers} />
            </div>
}

export default Users