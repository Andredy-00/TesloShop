import { titleFont } from "@/config/fonts";
import Link from "next/link";
import React from "react";

export const TopMenu = () => {
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span> | Shop</span>
        </Link>
      </div>
      {/* Center Menu */}
      <div className="">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/men"
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/women"
        >
          Mujeres
        </Link>

        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/kids"
        >
          Niños
        </Link>
      </div>
    </nav>
  );
};
