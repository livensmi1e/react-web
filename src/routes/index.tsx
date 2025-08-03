import { Route, Routes } from "react-router";
import AuthLayout from "@/shared/components/layout/auth-layout";
import LoginPage from "@/routes/auth/login-page";
import RegisterPage from "@/routes/auth/register-page";
import HomePage from "@/routes/home/home-page";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route index element={<HomePage />}></Route>
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};
