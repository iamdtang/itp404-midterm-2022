import { useState } from "react";
import { fetchTracks } from "../api";
import TracksTable from "../TracksTable";

export default function Index() {
  const [tracks, setTracks] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (search) {
            setIsLoading(true);

            fetchTracks(search).then((tracks) => {
              setIsLoading(false);
              setTracks(tracks);
            });
          } else {
            setTracks([]);
          }
        }}
      >
        <input
          type="search"
          placeholder="Search for a track"
          className="form-control my-3"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </form>

      {isLoading && <div>Loading...</div>}
      {tracks.length > 0 && <TracksTable tracks={tracks} />}
    </div>
  );
}
