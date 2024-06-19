import React from "react";
import Link from "next/link";

const Navbar = () => {
  const mongo =
    "mongodb+srv://egesaraymond644:<password>@planetzero.y0eqwqa.mongodb.net/?retryWrites=true&w=majority&appName=planetzero";
  return (
    <div className="w-full h-[65px] flex justify-between items-center px-5 border border-2 fixed top-0 left-0 bg-white">
      <h1 className="sm:text-4xl text-xl fomt-bold">PlanetZero</h1>
      <form className="hidden sm:block">
        <input
          placeholder="Search"
          type="text"
          className="rounded-md w-[25rem]"
        />
      </form>
      <ul className="flex justify-between items-center gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/auth/signin">Sign In</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
