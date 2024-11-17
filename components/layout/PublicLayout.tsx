import React from "react";
import Navbar from "./Navbar";

export default function PublicLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
