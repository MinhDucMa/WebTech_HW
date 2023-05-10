import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import '@mui/material/styles';
import Home from "./routes/Home";
import Search from "./routes/Search"
import Navbar from "./components/Navbar";
import Houses from "./routes/Houses";


const AppLayout = () => {
    return (
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}

const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children: [
            {
    path: "/",
    element: (
      <Home/>
    ),  
  },
  {
    path: "search",
    element: <Search/>,
  },
  {
    path: "houses",
    element: <Houses/>,
  },
        ]
    }
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);