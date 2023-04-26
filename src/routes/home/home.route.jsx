import "./home.styles.scss";
import Card from "../../components/card/card.component";
import { ToDoListSVG } from "../../components/svgs/toDoList.svg";
import { Users } from "../../components/svgs/users.svg";
import { Accordion } from "../../components/svgs/accordion.svg";
import { SpotiftIcon } from "../../components/svgs/spotify-icon";
import { WordPress } from "../../components/svgs/wordpress.svg";

const Home = () => {

  return (
    <>
      <div className="home_grid">
      <Card title={"Spotify API"} link={"spotify"} img={<SpotiftIcon />} />
      <Card title={"WordPress API"} link={"wp-posts"} img={<WordPress />} />
      <Card title={"Users"} link={"users"} img={<Users />} />
      <Card title={"To do list"} link={"to-do-list"} img={<ToDoListSVG />} />
      <Card title={"Accordion"} link={"accordion"} img={<Accordion />} />
   
      </div>
    </>
  );
};

export default Home;
