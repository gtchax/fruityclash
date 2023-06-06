import { Navigate, Outlet } from "react-router-dom";
import { selectCurrentUser } from "../app/slices/authSlice";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  let user = useSelector(selectCurrentUser)
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet/>;
};

export default ProtectedRoute;
