import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/infra/store/auth";

function ProtectedRoute() {
  const token = useAuthStore((state) => state.token);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
