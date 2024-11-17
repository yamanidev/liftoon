import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-2 py-4">
          <Link href="/" className="font-bold">
            Liftoon
          </Link>
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
        </div>
      </nav>
    </header>
  );
}
