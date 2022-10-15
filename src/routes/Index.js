import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TracksTable from "../TracksTable";

export default function Index() {
  const tracks = useLoaderData();
  const [filteredTracks, setFilteredTracks] = useState(tracks);
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1>Top 100 Tracks</h1>

      <input
        type="search"
        placeholder="Search for a track"
        className="form-control my-3"
        value={search}
        onChange={(event) => {
          const search = event.target.value;
          setSearch(search);

          const filteredTracks = tracks.filter((track) => {
            return track.attributes.name.indexOf(search) > -1;
          });

          setFilteredTracks(filteredTracks);
        }}
      />

      <TracksTable tracks={filteredTracks} />
    </div>
  );
}
