import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="layout-container">
      <Outlet />
    </main>
  );
};

export default Layout;
