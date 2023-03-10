import './userList.stlyes.scss';
import UserCard from "../userCard/UserCard.component";

const UserList = ({ users }) => {

    return(
        <>
        <div className="user_grid">
            {users.map((user) => {
                return <UserCard user={user}  />;
            })}
         </div>
         </>
    )

}

export default UserList;