import "./home.styles.scss";
import Card from "../../components/card/card.component";
import { ToDoListSVG } from "../../components/svgs/toDoList.svg";
// import { Dashboard } from "../../components/svgs/dashboard.svg";
// import { Weather } from "../../components/svgs/weather.svg";
import { Users } from "../../components/svgs/users.svg";
import { Accordion } from "../../components/svgs/accordion.svg";
import { Posts } from "../../components/svgs/posts.svg";

const Home = () => {
  return (
    <>
      <div className="home_grid">
        <Card title={"To do list"} link={"to-do-list"} img={<ToDoListSVG />} />
        <Card title={"Accordion"} link={"accordion"} img={<Accordion />} />
        {/* <Card title={"Weather"} link={"weather"} img={<Weather />} /> */}
        <Card title={"Users"} link={"users"} img={<Users />} />
        {/* <Card title={"Dashboard"} link={"dashboard"} img={<Dashboard />} /> */}
        <Card title={"WP Posts"} link={"wp-posts"} img={<Posts />} />
      </div>
    </>
  );
};

export default Home;
