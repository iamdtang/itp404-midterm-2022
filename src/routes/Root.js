import { Outlet, Link, useLoaderData } from "react-router-dom";

export default function Root() {
  const playlists = useLoaderData();

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-2">
          <nav>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              {playlists.map((playlist) => {
                return (
                  <li className="nav-item" key={playlist.id}>
                    <Link to={`/playlists/${playlist.id}`} className="nav-link">
                      {playlist.attributes.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <main className="col-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
