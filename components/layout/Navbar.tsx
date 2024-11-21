"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import NavbarLink from "./NavbarLink";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isCaseStudyPage = pathname.startsWith("/work");

  return (
    <header className="fixed inset-x-0 bottom-0 sm:bottom-auto sm:top-0">
      <nav className="mx-auto flex min-h-[4.5rem] w-full max-w-5xl items-center justify-center px-2 py-4 sm:justify-between">
        <Link href="/" className="hidden font-bold sm:inline">
          Liftoon
        </Link>
        {isCaseStudyPage ? (
          <Link
            href="/"
            className="inline-block rounded-md bg-white px-3 py-1.5 text-gray-950 transition hover:bg-gray-200">
            Back to home page
          </Link>
        ) : (
          <div className="flex items-center rounded-md bg-gray-900 p-1">
            <ul className="flex items-center gap-1 text-sm">
              <li>
                <NavbarLink href="/">Work</NavbarLink>
              </li>
              <li>
                <NavbarLink href="#">Blog</NavbarLink>
              </li>
              <li>
                <NavbarLink href="#">Contact</NavbarLink>
              </li>
            </ul>
            <button className="ml-5">
              <MagnifyingGlassIcon height="24" width="24" />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
