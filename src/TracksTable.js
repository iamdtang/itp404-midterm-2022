export default function TracksTable({ tracks }) {
  return (
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
        {tracks.map((track) => {
          return (
            <tr key={track.id}>
              <td>{track.attributes.name}</td>
              <td>
                {track.attributes.composer ? track.attributes.composer : "N/A"}
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
  );
}
