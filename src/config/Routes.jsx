import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import SearchFeed from "../Header/SearchFeed";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<Home />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="series" element={<Series />}/>

      {/* <Route path="advanced_search" element={<Search />} /> */}
      {/* <Route path="support" element={<Support />} /> */}
      {/* <Route path="search/:searchTerm" element={<SearchFeed />} /> */}

    </Route>
  )
);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
