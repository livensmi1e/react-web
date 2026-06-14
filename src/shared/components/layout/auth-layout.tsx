import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-background px-5 py-10 text-foreground md:px-8">
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
