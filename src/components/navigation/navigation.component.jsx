import { Outlet, NavLink } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {

//    window.onclick = function (event) {

//     var myBox = document.getElementById('menu');

//     if (event.target.contains(myBox) && event.target !== myBox) {
//       myBox.classList.remove('nav--open');
//     } else {
//     //  myBox.classList.add('nav--open');
//         console.log('You clicked inside the box!');
//     }
// }


  return (
    <>
      <div id='menu' className="nav">
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/spotify">Spotify API</NavLink>
          </li>
          <li>
            <NavLink to="/wp-posts">WP Posts</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/to-do-list">To do list</NavLink>
          </li>
          <li>
            <NavLink to="/accordion">Accordion</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
