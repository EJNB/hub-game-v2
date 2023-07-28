import NavBar from "../components/NavBar.tsx";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

export default Layout;
