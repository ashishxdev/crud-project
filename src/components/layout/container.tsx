// This is just to show how we gonna organize our folder or file structure

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string; // optional
}
export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("container mx-auto px-4", className)}>{children}</div>
  );
}
