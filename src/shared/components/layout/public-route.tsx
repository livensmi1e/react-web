import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/infra/store/auth";

function PublicRoute() {
  const token = useAuthStore((state) => state.token);
  if (token) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

export default PublicRoute;
