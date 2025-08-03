import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div>
      <p>Auth Layout</p>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
