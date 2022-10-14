import { useLoaderData } from "react-router-dom";
import TracksTable from "../TracksTable";

export default function Playlist() {
  const json = useLoaderData();

  return (
    <>
      <h1>{json.data.attributes.name}</h1>

      <TracksTable tracks={json.included} />
    </>
  );
}
