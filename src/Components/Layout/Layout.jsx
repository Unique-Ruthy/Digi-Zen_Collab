import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider.jsx";

const Layout = () => {
  const { auth } = useContext(AuthContext);
  return <div>{auth ? <Outlet /> : <Navigate to="/Login" />}</div>;
};

export default Layout;
