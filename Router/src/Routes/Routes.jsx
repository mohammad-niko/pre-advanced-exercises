import AppLayout from "../layouts/AppLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import About from "../pages/About";
import Content from "../pages/Content";
import Profile from "../pages/Dashboard/Profile";
import Setting from "../pages/Dashboard/Setting";
import Stats from "../pages/Dashboard/Stats";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

const routes = [
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/content", element: <Content /> },
      { path: "/login", element: <Login /> },
    ],
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <DashboardLayout />,
        children: [
          { path: "stats", element: <Stats /> },
          { path: "profile", element: <Profile /> },
          { path: "settings", element: <Setting /> },
        ],
      },
    ],
  },
];

// const routes = [
//   { path: "/", element: <Home /> },
//   { path: "/about", element: <About /> },
//   { path: "/content", element: <Content /> },
//   { path: "/login", element: <Login /> },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//     children: [
//       { path: "stats", element: <Stats /> },
//       { path: "profile", element: <Profile /> },
//       { path: "settings", element: <Setting /> },
//     ],
//   },
// ];

export default routes;
