import { useLoaderData } from "react-router-dom";
import TracksTable from "../TracksTable";

export default function Playlist() {
  const json = useLoaderData();
  const tracks = json.included;

  return (
    <>
      <h1>{json.data.attributes.name}</h1>
      {tracks ? (
        <TracksTable tracks={tracks} />
      ) : (
        <p>No tracks in this playlist.</p>
      )}
    </>
  );
}
