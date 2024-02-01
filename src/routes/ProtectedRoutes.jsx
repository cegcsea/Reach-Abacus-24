import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { auth } = useContext(AuthContext);
  return auth ? <Outlet /> : <Navigate to={"/"} replace />;
};

export default ProtectedRoute;