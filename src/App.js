import { Routes, Route } from 'react-router-dom';
import './App.scss';
import '../src/assets/styles/_color.scss';
import GlobalContext from './routes/context/global.context';
import Header from './components/header/header.component';

import Home from './routes/home/home.route';
import ToDoList from './routes/to-do-list/to-do-list.route';
import Weather from './routes/weather/weather.route';
import Dashboard from './routes/dashboard/dashboard.route';
import Users from './routes/users/users.route';
import Accordion from './routes/accordion/accordion.route';
import WPposts from './routes/wp-posts/wp-posts.route';
import SinglePost from './components/wp-posts/wp-post-single.component';

const App = () => {

  return (

    <div className="App">

      <Header />

      <div className='App__main'>
        <Routes>  
                <Route path='/'  element={ <Home /> }/> 
                  <Route path='/to-do-list/' element={ <ToDoList /> } /> 
                  <Route path='/weather/' element={ <Weather /> } /> 
                  <Route path='/accordion/' element={ <Accordion /> } /> 
                  <Route path='/users/' element={ <Users /> } /> 
                  <Route path='/dashboard/' element={ <Dashboard /> } /> 
                  <Route path='/context/' element={ <GlobalContext /> } /> 
                  <Route path='/wp-posts/'> 
                    <Route index element={ <WPposts />} />
                     <Route path=':id' element={ <SinglePost />} />
                </Route>

          </Routes>
      </div>

    </div>
  );
}

export default App;
