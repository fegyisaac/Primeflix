import { useEffect, useState } from "react";
// import router from "./Layout/RootLayout"
import RootLayout from "./Layout/RootLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import AdvSearch from "./pages/AdvSearch";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="series" element={<Series />} />
      <Route path="search" element={<AdvSearch />} />
      {/* <Route path="search/:searchTerm" element={<SearchFeed />} /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
