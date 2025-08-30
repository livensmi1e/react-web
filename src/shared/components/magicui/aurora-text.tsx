import { cn } from "@/shared/libs/util";
import { ReactNode } from "react";

interface AuroraTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

export function AuroraText({ children, className }: AuroraTextProps) {
  return (
    <span
      className={cn(
        "animate-aurora bg-gradient-to-br from-[#FF9C03] via-[#A78BFA] to-[#00A2E5] bg-clip-text text-transparent duration-75",
        className,
      )}
    >
      {children}
    </span>
  );
}
