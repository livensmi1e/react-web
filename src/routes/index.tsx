import { Route, Routes } from "react-router";
import AuthLayout from "@/shared/components/layout/auth-layout";
import LoginPage from "@/routes/auth/login-page";
import Register from "@/routes/auth/register-page";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};
