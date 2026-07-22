"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithRef } from "react";
import { cn } from "../../lib/utils";

type NavLinkProps = ComponentPropsWithRef<typeof Link>;

export default function NavLink({
  href,
  className,
  children,
  ...props
}: NavLinkProps) {
  const pathName = usePathname();
  const isActive = href === pathName;

  return (
    <Link
      {...props}
      className={cn(className, isActive && "text-primary font-semibold")}
      href={href}
    >
      {children}
    </Link>
  );
}
