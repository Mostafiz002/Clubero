import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Events from "../pages/Events";
import Clubs from "../pages/Clubs";
import Page404 from "../pages/Page404";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import ClubDetails from "../pages/ClubDetails";
import PaymentSuccess from "../pages/dashboard/PaymentSuccess";
import PaymentCancelled from "../pages/dashboard/PaymentCancelled";
import MyClubs from "../pages/dashboard/MyClubs";
import Overview from "../pages/dashboard/Overview";
import EventDetails from "../pages/EventDetails";
import Profile from "../pages/dashboard/Profile";

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
        path: "club-details/:id",
        Component: ClubDetails,
      },
      {
        path: "events",
        Component: Events,
      },
      {
        path: "event-details/:id",
        Component: EventDetails,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <Page404 />,
    children: [
      { path: "payment-success", Component: PaymentSuccess },
      { path: "payment-cancelled", Component: PaymentCancelled },
      {
        path: "profile",
        element: <Profile />,
      },
      { path: "my-clubs", Component: MyClubs },
      { path: "overview", element: <Overview /> },
    ],
  },
]);
