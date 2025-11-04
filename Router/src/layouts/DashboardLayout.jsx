import { NavLink, Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";

function DashboardLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: "200px",
          background: "#eee",
          padding: "1rem",
        }}
      >
        <Dashboard />
      </aside>

      <Outlet />
    </div>
  );
}

export default DashboardLayout;
