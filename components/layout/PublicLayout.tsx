import { ReactNode } from "react";
import Navbar from "./Navbar";

export default function PublicLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="sm:pt-[4.5rem]">{children}</main>
    </>
  );
}
