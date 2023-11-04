import { useEffect, useState } from "react";
// import router from "./Layout/RootLayout"
import RootLayout from "./Layout/RootLayout";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import AdvSearch from "./pages/AdvancedSearch/AdvSearch";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import SearchFeed from "./pages/SearchFeed/SearchFeed";
import VideoId from "./pages/idDetails/movieId/VideoId";
import TvId from "./pages/idDetails/tvId/TvId";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="series" element={<Series />} />
      <Route path="advanced_search" element={<AdvSearch />} />
      <Route path="/video/:id" element={<VideoId />} />
      <Route path="/tv/:id" element={<TvId />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
