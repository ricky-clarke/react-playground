import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import globalContext from './context/global.context';
import './App.scss';
import '../src/assets/styles/_color.scss';
import GlobalContext from './routes/context/global.context';
import Header from './components/header/header.component';
import Home from './routes/home/home.route';
import ToDoList from './routes/to-do-list/to-do-list.route';
import Weather from './routes/weather/weather.route';
import Users from './routes/users/users.route';
import Accordion from './routes/accordion/accordion.route';
import WPposts from './routes/wp-posts/wp-posts.route';
import SinglePost from './components/wp-posts/wp-post-single.component';
import Spotify from './routes/spotify/spotify.route';
import SpotifyProfile from './components/spotify/profile/profile.component';
import SpotifyArtist from './components/spotify/artist/artist.component';
import Player from './components/spotify/player/player';
import PlayList from './components/spotify/playlist/playlist.component';

const App = () => {

  const { state } =  useContext(globalContext);

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
                  <Route path='/context/' element={ <GlobalContext /> } /> 
                  <Route path='/wp-posts/'> 
                    <Route index element={ <WPposts />} />
                     <Route path=':id' element={ <SinglePost />} />
                </Route>
                <Route path='/spotify/'> 
                    <Route index element={ <Spotify />} />
                     <Route path='profile' element={ <SpotifyProfile />} />
                      <Route path='artist/:id' element={ <SpotifyArtist />} />
                      <Route path='playlist/:id' element={ <PlayList />} />
                </Route>
          </Routes>
      </div>

      { state.spotifyTrackURI && <Player track_url={state.spotifyTrackURI} /> }

    </div>
  );
}

export default App;
