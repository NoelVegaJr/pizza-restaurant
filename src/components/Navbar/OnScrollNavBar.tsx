import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import HamburgerMenu from "./HamburgerMenu";
import HamburgerMenu2 from "./HamburgerMenu";

const linkStyles = "transition-all duration-300 hover:text-yellow-700";

const OnScrollNavBar: React.FunctionComponent = (props) => {
  return (
    <nav className=" fixed top-0 z-30 flex w-full items-center justify-between bg-gradient-to-b from-white via-white to-transparent py-6">
      <Link
        href="/"
        className=" flex items-center justify-center pl-8  xl:pl-12"
      >
        <div className="lg:-32 relative h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 ">
          <Image src="/logo.png" alt="logo" fill />
        </div>
      </Link>

      <div className="px-8">
        <ul
          className="hidden items-center justify-center gap-8  pr-8 font-semibold xl:flex"
          style={{ fontFamily: "Petit Formal Script" }}
        >
          <Link href="/hoursLocation" className={linkStyles}>
            Hours + Location
          </Link>
          <Link href="/menus" className={linkStyles}>
            Menus
          </Link>
          <Link href="/story" className={linkStyles}>
            Our Story
          </Link>
          <Link href="/press" className={linkStyles}>
            Press
          </Link>
          <Link href="#" className={linkStyles}>
            Behind the Scenes
          </Link>
          <a
            href="https://slicelife.com/restaurants/nj/somerville/08876/prima-pizza-somerville/menu?utm_campaign=order_now_button&utm_medium=referral&utm_source=primapizzamenu.com"
            className="rounded-sm border border-black py-2
px-4 font-sans font-semibold uppercase transition-all duration-300 hover:bg-yellow-600"
            target="_blank"
            rel="noreferrer"
          >
            Order Online
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default OnScrollNavBar;
