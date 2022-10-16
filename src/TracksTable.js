import { useState } from "react";

export default function TracksTable({ tracks }) {
  const [filteredTracks, setFilteredTracks] = useState(tracks);
  const [search, setSearch] = useState("");

  return (
    <>
      <input
        type="search"
        placeholder="Search for a track"
        className="form-control my-3"
        value={search}
        onChange={(event) => {
          const search = event.target.value;
          setSearch(search);

          const filteredTracks = tracks.filter((track) => {
            return track.attributes.name
              .toLowerCase()
              .includes(search.toLowerCase());

            // this is also acceptable
            return (
              track.attributes.name
                .toLowerCase()
                .indexOf(search.toLowerCase()) > -1
            );
          });

          setFilteredTracks(filteredTracks);
        }}
      />
      {filteredTracks.length > 0 ? (
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Composer</th>
              <th>Listens</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredTracks.map((track) => {
              return (
                <tr key={track.id}>
                  <td>{track.attributes.name}</td>
                  <td>
                    {track.attributes.composer
                      ? track.attributes.composer
                      : "N/A"}
                  </td>
                  <td>
                    {new Intl.NumberFormat("en-US").format(
                      track.attributes.listens
                    )}
                  </td>
                  <td>${track.attributes.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No tracks found for "{search}".</p>
      )}
    </>
  );
}
