import { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { checkLogin } from "./app/slices/authSlice";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

const AppRouter = ({ dispatch }) => {

  let location = useLocation();
  const { pathname } = location;
 

  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route index element={<Home />} />
        {/* <Route element={<PublicRoute />}>
          <Route exact path="admin/login" element={<Login />} />
        </Route> */}

        {/* <Route element={<ProtectedRoute />}> */}
          {/* <Route path="admin/*" element={<DashLayout />}> */}
     
        {/* <Route path="*" element={<NotFound />} /> */}
      {/* </Routes> */}
      </Routes>
    </AnimatePresence>
  );
};

export default connect()(AppRouter);
