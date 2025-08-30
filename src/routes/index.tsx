import { Route, Routes } from "react-router";
import AuthLayout from "@/shared/components/layout/auth-layout";
import LoginPage from "@/routes/auth/login-page";
import RegisterPage from "@/routes/auth/register-page";
import HomePage from "@/routes/home/home-page";
import ProtectedRoute from "@/shared/components/layout/protected-route";
import AppLayout from "@/shared/components/layout/app-layout";
import PublicRoute from "@/shared/components/layout/public-route";
import { Toaster } from "sonner";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />}></Route>
          </Route>
        </Route>
      </Routes>

      <Toaster richColors closeButton position="top-right" />
    </>
  );
};
