import { Outlet } from "react-router";
import { Toaster } from "@/shared/components/ui/sonner";

function AppLayout() {
  return (
    <>
      <div>
        <Outlet />
      </div>
      <Toaster richColors closeButton />
    </>
  );
}

export default AppLayout;
