import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Events from "../pages/Events";
import Clubs from "../pages/Clubs";
import Page404 from "../pages/Page404";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
     errorElement: <Page404 />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "clubs",
        Component: Clubs,
      },
      {
        path: "events",
        Component: Events,
      },
    ],
  },
]);
