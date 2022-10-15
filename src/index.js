import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Index from "./routes/Index";
import { fetchPlaylist, fetchPlaylists, fetchTracks } from "./api";
import Playlist from "./routes/Playlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader() {
      return fetchPlaylists();
    },
    children: [
      {
        path: "/",
        element: <Index />,
        loader() {
          return fetchTracks();
        },
      },
      {
        path: "/playlists/:playlistId",
        element: <Playlist />,
        loader({ params }) {
          return fetchPlaylist(params.playlistId);
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
