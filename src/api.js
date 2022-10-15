const HOST = "https://chinook-api.herokuapp.com";
// const HOST = "http://localhost:8000";

function _fetch(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

export function fetchPlaylists() {
  return _fetch(`${HOST}/api/playlists`).then((json) => {
    return json.data;
  });
}

export async function fetchTracks() {
  return _fetch(`${HOST}/api/tracks`).then((json) => {
    return json.data;
  });
}

export function fetchPlaylist(id) {
  return _fetch(`${HOST}/api/playlists/${id}`);
}
