import { useScroll } from "framer-motion";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import InitialNavBar from "../components/Navbar/InitialNavBar";
import OnScrollNavBar from "../components/Navbar/OnScrollNavBar";

export default function HoursLocation() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const { scrollY } = useScroll();

  scrollY.onChange((y) => {
    setScrollPosition(y);
  });
  return (
    <>
      <Layout>
        <section className="mx-auto mb-20">
          <p
            className="my-12 w-full text-center text-5xl uppercase"
            style={{ fontFamily: "Special Elite" }}
          >
            Hours & Location
          </p>
          <p className="mb-12 text-center text-lg text-yellow-600">
            123 Sprint Street,
            <br />
            Hoboken, NJ 08873
            <br />
            555-555-5555
            <br />
            info@resturaunt.com
          </p>
          <ul className="flex flex-col items-center justify-center gap-6 text-center">
            <li>
              <p className="text-lg font-semibold">Monday</p>
              <p className="text-lg">Closed</p>
            </li>
            <li>
              <p className="text-lg font-semibold">Tuesday - Thursday</p>
              <p className="text-lg">10:30 am - 9:30 pm</p>
            </li>
            <li>
              <p className="text-lg font-semibold">Friday - Saturday</p>
              <p className="text-lg">10:30 am - 8:00 pm</p>
            </li>
            <li>
              <p className="text-lg font-semibold">Sunday</p>
              <p className="text-lg">10:30 am - 9:30 pm</p>
            </li>
          </ul>
        </section>
        {/* </div> */}
      </Layout>
    </>
  );
}
