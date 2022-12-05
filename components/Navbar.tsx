import Image from "next/image";
import Link from "next/link";
import React from "react";
import artsyLogo from "../public/brand/ARTSY.svg";

export default function Navbar() {
  return (
    <header className="w-full flex justify-between items-center lg:px-20 py-2">
      {/* Logo */}
      <Link href={"/"}>
        <Image
          src={artsyLogo}
          alt="Artsy Logo"
          width={100}
          height={30}
          priority
        />
      </Link>

      {/* Nav Links */}
      <nav className="flex w-[30%] justify-between items-center">
        <Link href={"/"}>
          <span> Home</span>
        </Link>

        <Link href={"/"}>
          <span>Marketplace</span>
        </Link>

        <Link href={"/"}>
          <span>Auction</span>
        </Link>

        <Link href={"/"}>
          <span>Drop</span>
        </Link>
      </nav>

      {/* search, cart, and notification icon */}
      <nav></nav>
    </header>
  );
}
