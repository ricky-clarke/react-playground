// Client id

// Local site
// const client_id = 'b496c2ceab6549fbb074dbb8d634d916';
// const redirect_uri = 'http://localhost:3000/spotify';

// Live site
// const client_id = '79dc800c5eac48e1b0e1c0929277742d'; 
// const redirect_uri = 'https://ricky-react-app-playground.netlify.app/spotify';


// Permissions
const scopes = [
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'app-remote-control',
    'streaming',
    'playlist-read-private',
    'playlist-read-collaborative',
    'playlist-modify-private',
    'playlist-modify-public',
    'user-follow-modify',
    'user-follow-read',
    'user-read-playback-position',
    'user-top-read',
    'user-read-recently-played',
    'user-library-modify',
    'user-library-read',
    'user-read-email',
    'user-read-private'
];

// Login URL
export const loginURL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

