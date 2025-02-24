import { navbarJsonObject } from "@/lib/static-json";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 ">
      {/* Logo */}
      <Link href="/" className="font-mono text-2xl font-bold text-gray-700">
        tour buddy
      </Link>

      {/* Desktop Navbar (Large Screens) */}
      <div className="hidden md:flex space-x-10 items-center">
        {navbarJsonObject.map((navbar) => (
          <Link key={navbar.href} href={navbar.href} passHref>
            <span className="text-gray-600 hover:text-blue-500 transition-all duration-300">
              {navbar.title}
            </span>
          </Link>
        ))}
        {/* Sign In Button */}
        <button className="px-6 py-2 bg-yellow-300 text-black rounded-md hover:bg-yellow-400">
          Sign In
        </button>
      </div>

      {/* Mobile Navbar */}
      <MobileNavbar />
    </nav>
  );
}
