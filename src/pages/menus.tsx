import { useScroll } from "framer-motion";
import * as React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import InitialNavBar from "../components/Navbar/InitialNavBar";
import OnScrollNavBar from "../components/Navbar/OnScrollNavBar";
import PizzaMenu from "../components/Menus/PizzaMenu";
import DinnersMenu from "../components/Menus/DinnersMenu";
import KidsMenu from "../components/Menus/KidsMenu";
import BeveragesMenu from "../components/Menus/BeveragesMenu";
import DessertsMenu from "../components/Menus/DessertsMenu";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const MenusPage: React.FunctionComponent = (props) => {
  const [menu, setMenu] = useState("Pizzas");
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const { scrollY } = useScroll();

  scrollY.onChange((y) => {
    setScrollPosition(y);
  });

  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);

  return (
    <>
      <Layout>
        <section className="flex h-screen flex-col ">
          {scrollPosition === 0 ? <InitialNavBar /> : <OnScrollNavBar />}
          <div className="relative   flex h-full w-full flex-1   items-center justify-center overflow-hidden">
            <Image
              src="/menus.jpg"
              alt="menus banner"
              fill
              className="absolute -z-50"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute h-full w-full bg-black/20" />
            <p
              style={{ fontFamily: "Special Elite" }}
              className="z-30 text-7xl text-white"
            >
              Menus
            </p>
          </div>
        </section>

        <section>
          <nav className="flex items-center justify-center gap-4 py-12 text-sm sm:text-xl md:py-24">
            <button
              onClick={() => {
                setMenu("Pizzas");
              }}
              className={`${
                menu === "Pizzas" && "border-b-yellow-600 text-yellow-700"
              } border-b-4  border-dotted border-black  transition-all duration-300`}
            >
              Pizzas
            </button>
            <button
              onClick={() => {
                setMenu("Dinners");
              }}
              className={`${
                menu === "Dinners" && "border-b-yellow-700 text-yellow-700"
              } border-b-4 border-dotted border-black  transition-all duration-300`}
            >
              Dinners
            </button>
            <button
              onClick={() => {
                setMenu("Kids Menu");
              }}
              className={`${
                menu === "Kids Menu" && "border-b-yellow-700 text-yellow-700"
              } border-b-4 border-dotted border-black  transition-all duration-300`}
            >
              Kids Menu
            </button>
            <button
              onClick={() => {
                setMenu("Beverages");
              }}
              className={`${
                menu === "Beverages" && "border-b-yellow-700 text-yellow-700"
              } border-b-4 border-dotted border-black  transition-all duration-300`}
            >
              Beverages
            </button>
            <button
              onClick={() => {
                setMenu("Desserts");
              }}
              className={`${
                menu === "Desserts" && "border-b-yellow-700 text-yellow-700"
              } border-b-4 border-dotted border-black  transition-all duration-300`}
            >
              Desserts
            </button>
          </nav>
        </section>

        <section className="pb-20">
          {menu === "Pizzas" && <PizzaMenu />}
          {menu === "Dinners" && <DinnersMenu />}
          {menu === "Kids Menu" && <KidsMenu />}
          {menu === "Beverages" && <BeveragesMenu />}
          {menu === "Desserts" && <DessertsMenu />}
        </section>
      </Layout>
    </>
  );
};

export default MenusPage;
