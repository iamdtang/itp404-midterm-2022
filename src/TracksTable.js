export default function TracksTable({ tracks }) {
  return tracks ? (
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Composer</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {tracks.map((track) => {
          return (
            <tr key={track.id}>
              <td>{track.attributes.name}</td>
              <td>
                {track.attributes.composer ? track.attributes.composer : "N/A"}
              </td>
              <td>${track.attributes.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <p>No tracks found.</p>
  );
}
