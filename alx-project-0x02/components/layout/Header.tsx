import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-indigo-500 py-4">
      <nav className="text-white mb-4">
        <ul className="flex gap-4 float-left justify-center items-center list-none">
            <li className="hover:text-amber-300">
                <Link href='/home'>Home</Link>
            </li>
            <li className="hover:text-amber-300">
                <Link href='/about'>About</Link>
            </li>
            <li className="hover:text-amber-300">
                <Link href='/posts'>Posts</Link>
            </li>
            <li className="hover:text-amber-300">
                <Link href='/users'>Users</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
