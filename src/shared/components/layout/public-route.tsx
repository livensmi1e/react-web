import { Navigate, Outlet, useLocation } from "react-router";
import { useAuthStore } from "@/services/store/auth";

function PublicRoute() {
  const token = useAuthStore((state) => state.token);
  const location = useLocation();
  const from = location.state?.from?.pathname ?? "/";

  if (token) {
    return <Navigate to={from} replace />;
  }

  return <Outlet />;
}

export default PublicRoute;
