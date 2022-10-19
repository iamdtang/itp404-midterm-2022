# ITP 404 Midterm

Rebuild the following music application with React, React Router v6.4.0 or higher, and Bootstrap:

https://itp404-midterm-2022.surge.sh/

I have provided [most of the HTML using Bootstrap](https://codesandbox.io/s/midterm-html-skeleton-b2j03j) so that you can focus on the functionality.

1. Your application must behave exactly the same as the example and show the same data.
1. Your application must have the same client-side routes (URLs).
1. Your application must use `fetch` instead of `$.ajax`.
1. Your application shouldn't have any React errors in the console, like the `key` errors.
1. All rendering should happen through React. You shouldn't have any jQuery code or `document.` references.

Detailed requirements for each section are below.

### The Left Navigation (20 points)

1. There is a Home link that navigates to `/`.
1. Fetch all the available playlists from https://chinook-api.herokuapp.com/api/playlists and render each one as a link.
1. As you click through the links in the navigation, there should not be additional requests to https://chinook-api.herokuapp.com/api/playlists. In other words, only a single request to https://chinook-api.herokuapp.com/api/playlists should happen between page refreshes.

### The Home Page (10 points)

1. The URL path for this page is `/`.
1. Display "Top 100 Tracks" in an `h1` tag.
1. Fetch tracks from https://chinook-api.herokuapp.com/api/tracks.
1. Render the tracks in the Track Table Component (see below).

### The Playlist Details Page (20 points)

1. The URL path for this page matches the format `/playlists/:id`.
1. Fetch a playlist and its tracks via `GET /api/playlists/{id}`, such as https://chinook-api.herokuapp.com/api/playlists/1.
1. Display the name of the playlist in an `h1` tag.
1. Render the tracks in the Track Table Component (see below).
1. If a playlist doesn't contain any tracks, render "No tracks in this playlist." in a `p` tag. For example: https://itp404-midterm-2022.surge.sh/playlists/2.

**Note that there is a small bug in the application. If you click between 2 playlists that have tracks, you won't see the tracks update. If you refresh the page however, you will see the tracks for that playlist. If you click between a playlist with tracks and one that doesn't have tracks, you will see the main content area update. You don't need to fix this, but if you do, you won't be deducted. Sorry about that!**

### Track Table Component (50 points)

1. Display the following track properties in an HTML table (20 points):

   1. `name`
   1. `composer`. If there is no composer, display "N/A".
   1. `listens` formatted using commas. This can be achieved with `new Intl.NumberFormat("en-US").format(123456789)` which produces `123,456,789`.
   1. `price`

1. Light and Dark Mode (15 points)

   1. The "Light" radio button should be checked by default and the table should be in light mode (the `table` tag should have the CSS class `table-light`).
   1. Clicking on the "Dark" radio button should put the table in dark mode (the `table` tag should have the CSS class `table-dark`).
   1. Clicking on the "Light" radio button should put the table in light mode (the `table` tag should have the CSS class `table-light`).
   1. These radio buttons should be controlled components.

1. Search (15 points)

   1. There should be an input that is a controlled component.
   1. Typing into the input [filters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) the list of tracks in the table if a track's name contains what was typed into the search input. This should be **case insensitive**. Hint: use either [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) or [`includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes). See code example at the end of this document.
   1. If a search doesn't produce any results, render "No tracks found for "[search term here]"." in a `p` tag.

How to use `include` and `indexOf` on strings:

```js
"Enter Sandman".toLowerCase().includes("sand"); // true
"Enter Sandman".toLowerCase().includes("Sand"); // false

// OR

"Enter Sandman".toLowerCase().indexOf("sand") > -1; // true
"Enter Sandman".toLowerCase().indexOf("Sand") > -1; // false
```
