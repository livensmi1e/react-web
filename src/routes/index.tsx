import { Route, Routes } from "react-router";
import AuthLayout from "@/shared/components/layout/AuthLayout";
import Login from "@/routes/Auth/Login";
import Register from "@/routes/Auth/Register";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};
