// Client id

// Local site
const CLIENT_API_KEY = `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}`
const URL_REDIRECT = `${process.env.REACT_APP_SPOTIFY_REDIRECT}`
const client_id = CLIENT_API_KEY;
const redirect_uri = URL_REDIRECT;

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

