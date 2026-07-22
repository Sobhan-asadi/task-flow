import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-4 lg:px-2", className)}
      {...props}
    >
      {children}
    </div>
  );
}
