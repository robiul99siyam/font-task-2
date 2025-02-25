"use client";
import { navbarJsonObject } from "@/lib/static-json";
import Link from "next/link";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { IoMdMenu } from "react-icons/io";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button (Visible on sm & md, hidden on lg+) */}
      <button
        className="lg:hidden text-gray-600 text-3xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <ImCross /> : <IoMdMenu />}
      </button>

      {/* Mobile Menu (Visible on sm & md, hidden on lg+) */}
      {open && (
        <div className="absolute top-16 right-0 bg-white shadow-lg rounded-lg p-5 flex flex-col space-y-4 w-3/4 sm:w-2/3 md:w-1/2 lg:hidden px-10 transition duration-500">
          {navbarJsonObject.map((navbar) => (
            <Link
              key={navbar.href}
              href={navbar.href}
              className="text-gray-600 hover:text-blue-500 transition-all duration-300"
            >
              {navbar.title}
            </Link>
          ))}
          {/* Sign In Button */}
          <button className="px-6 py-2 bg-yellow-300 text-black rounded-md">
            Sign In
          </button>
        </div>
      )}
    </>
  );
}
