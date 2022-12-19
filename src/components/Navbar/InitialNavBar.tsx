import Link from "next/link";
import * as React from "react";
import HamburgerMenu from "./HamburgerMenu";
import Image from "next/image";
const linkStyles = "transition-all duration-300 hover:text-yellow-600";

const InitialNavBar: React.FunctionComponent = ({}) => {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between gap-y-6 py-6 px-8 xl:flex-col   xl:justify-center">
      <Link href="/" className=" flex items-center justify-center">
        <p
          className="border-r border-black pr-4 text-3xl font-bold text-red-800 md:text-5xl"
          style={{ fontFamily: "Petit Formal Script" }}
          // style={{ fontFamily: "Fondomento" }}
        >
          Prima
        </p>{" "}
        <div
          className="flex flex-col -space-y-1 pl-4 font-bold"
          style={{ fontFamily: "Lato" }}
        >
          <p>Pizzeria</p> <p>Napoletana</p>
        </div>
      </Link>

      <div>
        <ul
          className="hidden items-center justify-center  gap-8 font-semibold xl:flex"
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
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default InitialNavBar;
