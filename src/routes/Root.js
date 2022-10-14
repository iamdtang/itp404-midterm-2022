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
                {playlists.map((playlist) => {
                  return (
                    <Link
                      to={`/playlists/${playlist.id}`}
                      key={playlist.id}
                      className="nav-link"
                    >
                      {playlist.attributes.name}
                    </Link>
                  );
                })}
              </li>
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
