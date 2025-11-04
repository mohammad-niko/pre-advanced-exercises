import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>

      <nav>
        <NavLink
          to="stats"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Stats
        </NavLink>
        <NavLink
          to="profile"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Profile
        </NavLink>
        <NavLink
          to="settings"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Setting
        </NavLink>
      </nav>

    
    </>
  );
}

// function Dashboard() {
//   return (
//     <>
//       <h2>Dashboard</h2>

//       <nav>
//         <NavLink
//           to="stats"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           Stats
//         </NavLink>
//         <NavLink
//           to="profile"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           Profile
//         </NavLink>
//         <NavLink
//           to="settings"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           Setting
//         </NavLink>
//       </nav>

//       <Outlet />
//     </>
//   );
// }

export default Dashboard;
