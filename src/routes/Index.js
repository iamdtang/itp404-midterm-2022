import { useLoaderData } from "react-router-dom";
import TracksTable from "../TracksTable";

export default function Index() {
  const tracks = useLoaderData();

  return (
    <>
      <h1>Top 100 Tracks</h1>
      <TracksTable tracks={tracks} />
    </>
  );
}
