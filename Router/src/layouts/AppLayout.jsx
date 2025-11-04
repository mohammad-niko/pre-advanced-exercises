import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";

function AppLayout() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: "50px" }}>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
