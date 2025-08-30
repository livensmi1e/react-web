import { Outlet } from "react-router";
import { Map } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { Button } from "@/shared/components/ui/button";
import { User, LogOut } from "lucide-react";
import { AuroraText } from "@/shared/components/magicui/aurora-text";

function AppLayout() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#fcfcfc] dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
      <header className=" bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 left-0 z-30">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Map className="h-6 w-6 text-[#00A2E5]" />
            <AuroraText className="text-xl font-bold" speed={2}>
              Vehicle Tracking
            </AuroraText>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full focus-visible:ring-0"
                type="button"
              >
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32">
              <DropdownMenuItem disabled>
                <User className="mr-2 h-4 w-4" />
                <span className="font-medium">livensmi1e</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="z-30 flex-1 w-full max-w-screen-2xl mx-auto p-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
