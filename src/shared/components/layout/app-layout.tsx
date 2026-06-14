import { Outlet, useNavigate } from "react-router";
import { Activity, LogOut, Terminal, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { Button } from "@/shared/components/ui/button";
import { clearAuthSession, useAuthStore } from "@/services/store/auth";

function AppLayout() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  function handleLogout() {
    clearAuthSession();
    navigate("/login", { replace: true });
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 left-0 z-30 border-b border-terminal-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-5 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex size-7 items-center justify-center border border-terminal-border bg-terminal-surface">
              <Terminal className="size-4 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium text-terminal-fg">fx</div>
              <div className="text-[11px] leading-none text-terminal-dim">
                weekend production template
              </div>
            </div>
          </div>
          <div className="hidden items-center gap-2 text-xs text-terminal-muted sm:flex">
            <Activity className="size-3.5 text-primary" />
            <span>local stack ready</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="border border-terminal-border bg-terminal-surface hover:bg-accent focus-visible:ring-0"
                type="button"
              >
                <User className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36">
              <DropdownMenuItem disabled>
                <User className="mr-2 size-4" />
                <span className="truncate font-medium">
                  {user?.name ?? user?.email ?? "developer"}
                </span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive" onSelect={handleLogout}>
                <LogOut className="mr-2 size-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="z-10 mx-auto w-full max-w-5xl flex-1 px-5 py-10 md:px-8 md:py-16">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
