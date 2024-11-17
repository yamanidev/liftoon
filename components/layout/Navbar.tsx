import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-2 py-4">
          <Link href="/" className="font-bold">
            Liftoon
          </Link>
          <div className="flex items-center rounded-md bg-gray-900 p-1">
            <ul className="flex items-center text-sm">
              <li>
                <Link
                  href="/"
                  className="inline-block rounded-md px-3 py-1.5 transition hover:bg-gray-600">
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-block rounded-md px-3 py-1.5 transition hover:bg-gray-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-block rounded-md px-3 py-1.5 transition hover:bg-gray-600">
                  Contact
                </Link>
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
