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
import Overview from "../pages/dashboard/Overview";
import EventDetails from "../pages/EventDetails";
import Profile from "../pages/dashboard/Profile";
import MyEvents from "../pages/dashboard/member/MyEvents";
import PaymentHistory from "../pages/dashboard/PaymentHistory";
import MyClubs from "../pages/dashboard/member/MyClubs";
import ManageClubs from "../pages/dashboard/ManageClubs";
import ClubMember from "../pages/dashboard/club_manager/ClubMember";
import ManagerRoute from "./ManagerRoute";
import EventManagement from "../pages/dashboard/club_manager/EventManagement";
import EventRegistrations from "../pages/dashboard/club_manager/EventRegistrations";
import ManageUsers from "../pages/dashboard/admin/ManageUsers";
import AdminRoute from "./AdminRoute";
import Transactions from "../pages/dashboard/admin/Transactions";

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
      { path: "my-events", Component: MyEvents },
      { path: "payment-history", Component: PaymentHistory },
      { path: "overview", element: <Overview /> },
      { path: "manage-clubs", element: <ManageClubs /> },
      // club manager route
      {
        path: "club-member",
        element: (
          <ManagerRoute>
            <ClubMember />
          </ManagerRoute>
        ),
      },
      {
        path: "event-management",
        element: (
          <ManagerRoute>
            <EventManagement />
          </ManagerRoute>
        ),
      },
      {
        path: "event-registrations",
        element: (
          <ManagerRoute>
            <EventRegistrations />
          </ManagerRoute>
        ),
      },
      //admin only route
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "transactions",
        element: (
          <AdminRoute>
            <Transactions />
          </AdminRoute>
        ),
      },
    ],
  },
]);
