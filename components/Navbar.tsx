import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

import artsyLogo from "../public/brand/ARTSY.svg";

import { FiSearch } from "react-icons/fi";
import { TbShoppingCart } from "react-icons/tb";
import { HiOutlineBell } from "react-icons/hi";

export default function Navbar() {
  const { asPath } = useRouter();

  return (
    <header className="w-full flex justify-between items-center lg:px-20 py-2">
      {/* Logo */}
      <div className="flex justify-start items-center w-[33.33%]">
        <Link href={"/"}>
          <Image
            src={artsyLogo}
            alt="Artsy Logo"
            width={100}
            height={30}
            priority
          />
        </Link>
      </div>

      {/* Nav Links */}
      <nav className="flex w-[33.33%] justify-between items-center">
        <Link href={"/"}>
          <span
            className={`${
              asPath === "/" ? "font-medium border-b-2 border-black" : null
            }`}
          >
            {" "}
            Home
          </span>
        </Link>

        <Link href={"/marketplace"}>
          <span
            className={`${
              asPath === "/marketplace"
                ? "font-medium border-b-2 border-black"
                : null
            }`}
          >
            Marketplace
          </span>
        </Link>

        <Link href={"/auctions"}>
          <span
            className={`${
              asPath === "/auctions"
                ? "font-medium border-b-2 border-black"
                : null
            }`}
          >
            Auction
          </span>
        </Link>

        <Link href={"/drop"}>
          <span
            className={`${
              asPath === "/drop" ? "font-medium border-b-2 border-black" : null
            }`}
          >
            Drop
          </span>
        </Link>
      </nav>

      {/* search, cart, and notification icon */}
      <div className="flex w-[33.33%] justify-end items-center">
        <nav className="flex gap-10 justify-between items-center">
          {/* search */}
          <div className="cursor-pointer">
            <FiSearch size={21} color="#333333" />
          </div>

          {/* cart */}
          <div className="cursor-pointer">
            <TbShoppingCart size={21} color="#333333" />
          </div>

          {/* notification */}
          <div className="cursor-pointer">
            <HiOutlineBell size={21} color="#333333" />
          </div>
        </nav>
      </div>
    </header>
  );
}
