import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("container mx-auto px-6 md:px-8", className)} {...props} />;
}
