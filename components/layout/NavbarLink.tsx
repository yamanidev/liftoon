"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavbarLink({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`inline-block rounded-md px-3 py-1.5 transition hover:bg-gray-600 ${isActive && "bg-gray-700"}`}>
      {children}
    </Link>
  );
}
