import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TracksTable from "../TracksTable";

export default function Playlist() {
  const json = useLoaderData();
  const tracks = json.included;
  const [filteredTracks, setFilteredTracks] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch("");
  }, [json]);

  return (
    <>
      <h1>{json.data.attributes.name}</h1>
      {tracks && (
        <input
          type="search"
          className="form-control my-3"
          value={search}
          onChange={(event) => {
            const search = event.target.value;

            const filteredTracks = tracks.filter((track) => {
              return track.attributes.name.includes(search);
            });

            setSearch(search);
            setFilteredTracks(filteredTracks);
          }}
        />
      )}

      <TracksTable tracks={search ? filteredTracks : tracks} />
    </>
  );
}
