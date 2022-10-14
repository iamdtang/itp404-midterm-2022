export default function TracksTable({ tracks }) {
  return tracks ? (
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Composer</th>
        </tr>
      </thead>
      <tbody>
        {tracks.map((track) => {
          return (
            <tr key={track.id}>
              <td>{track.attributes.name}</td>
              <td>
                {track.attributes.composer ? track.attributes.composer : "NA"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <p>No tracks found.</p>
  );
}
