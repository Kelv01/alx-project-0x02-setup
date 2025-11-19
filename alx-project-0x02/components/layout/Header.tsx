import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="text-white p-2">
        <ul className="flex gap-4 float-left justify-center items-center list-none">
            <li className="hover:text-amber-300">
                <Link href='/home'>home</Link>
            </li>
            <li className="hover:text-amber-300">
                <Link href='/about'>about</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
