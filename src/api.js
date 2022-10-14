const HOST = "https://chinook-api.herokuapp.com";

export function fetchPlaylists() {
  return fetch(`${HOST}/api/playlists`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json.data;
    });
}

export function fetchPlaylist(id) {
  return fetch(`${HOST}/api/playlists/${id}`).then((response) => {
    if (response.status >= 400) {
      return Promise.reject(`Playlist ${id} not found`);
    }

    return response.json();
  });
}
