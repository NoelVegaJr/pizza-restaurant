import { useScroll } from "framer-motion";
import * as React from "react";
import { useState } from "react";
import Footer from "./Footer";
import InitialNavBar from "./Navbar/InitialNavBar";
import OnScrollNavBar from "./Navbar/OnScrollNavBar";
import { DrawerContext } from "../context/drawer-context";
import { useContext } from "react";
import Link from "next/link";
import HamburgerMenu from "./Navbar/HamburgerMenu";
import Image from "next/image";

const linkStyles = "transition-all duration-200 hover:text-yellow-600";

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
  slideShow?: JSX.Element;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({
  children,
  slideShow,
}) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const { scrollY } = useScroll();
  const drawerCtx = useContext(DrawerContext);

  scrollY.onChange((y) => {
    setScrollPosition(y);
  });
  return (
    <>
      <HamburgerMenu />

      {/* {drawerCtx.isOpen && ( */}

      {/* )} */}
      <div
        className={`fixed -top-full ${
          drawerCtx.isOpen
            ? "translate-y-full opacity-100"
            : "-translate-y-full opacity-0"
        } left-0 z-40 h-screen w-full bg-white transition-all duration-700`}
      >
        <div className=" mt-14 w-full">
          <Link
            onClick={drawerCtx.close}
            href="/"
            className="lg:-32 relative mx-auto block  h-24 w-24 md:h-28 md:w-28 lg:h-40 lg:w-40"
          >
            <Image src="/PrimaLogo.avif" alt="logo" fill />
          </Link>
        </div>
        <section className="mt-10">
          <ul
            className="flex flex-col  items-center justify-center gap-8 font-semibold"
            style={{ fontFamily: "Petit Formal Script" }}
          >
            <Link
              onClick={drawerCtx.close}
              href="/hoursLocation"
              className={linkStyles}
            >
              Hours + Location
            </Link>
            <Link
              onClick={drawerCtx.close}
              href="/menus"
              className={linkStyles}
            >
              Menus
            </Link>
            <Link
              onClick={drawerCtx.close}
              href="/story"
              className={linkStyles}
            >
              Our Story
            </Link>
            <Link
              onClick={drawerCtx.close}
              href="/press"
              className={linkStyles}
            >
              Press
            </Link>
            <Link onClick={drawerCtx.close} href="#" className={linkStyles}>
              Behind the Scenes
            </Link>
            <a
              onClick={drawerCtx.close}
              href="https://slicelife.com/restaurants/nj/somerville/08876/prima-pizza-somerville/menu?utm_campaign=order_now_button&utm_medium=referral&utm_source=primapizzamenu.com"
              className="rounded-sm border border-black py-2
px-4 font-sans font-semibold uppercase transition-all duration-300 hover:bg-yellow-600"
              target="_blank"
              rel="noreferrer"
            >
              Order Online
            </a>
          </ul>
        </section>
      </div>

      <section className="flex min-h-screen  flex-col ">
        <section
          className={`flex ${slideShow ? "h-screen" : "h-fit"} flex-col`}
        >
          {scrollPosition === 0 ? <InitialNavBar /> : <OnScrollNavBar />}
          <div className="relative mt-24 flex w-full  flex-1  flex-col  xl:mt-40">
            {slideShow}
          </div>
        </section>

        {children}
      </section>
      <Footer />
    </>
  );
};

export default Layout;
