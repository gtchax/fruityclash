import { Navigate, Outlet } from "react-router-dom";
import { selectCurrentUser } from "../app/slices/authSlice";
import { useSelector } from "react-redux";

const PublicRoute = () => {
  let user = useSelector(selectCurrentUser)

  if (user) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
