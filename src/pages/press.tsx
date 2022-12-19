import { AnimatePresence, motion, useScroll } from "framer-motion";
import * as React from "react";
import { useState } from "react";
import InitialNavBar from "../components/Navbar/InitialNavBar";
import OnScrollNavBar from "../components/Navbar/OnScrollNavBar";
import Image from "next/image";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const Article = ({
  publisher,
  title,
  image,
}: {
  publisher: string;
  title: string;
  image: string;
}) => {
  const [hovering, setHovering] = useState(false);
  return (
    <div
      className="group flex cursor-pointer flex-col items-center"
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
    >
      <AnimatePresence>
        <div className="relative mb-6 h-52 w-full overflow-hidden rounded-sm">
          <Image
            src={image}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            className="absolute transition-all duration-300 group-hover:scale-110"
          />
          {hovering && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute h-full w-full bg-black/10"
              transition={{ opacity: { duration: 0.2 } }}
            />
          )}
        </div>
        <div className="flex flex-col gap-4 text-center">
          <p className="text-2xl" style={{ fontFamily: "Special Elite" }}>
            {publisher}
          </p>
          <p className="text-lg">{title}</p>
        </div>
      </AnimatePresence>
    </div>
  );
};

const PressPage: React.FunctionComponent = (props) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const { scrollY } = useScroll();

  scrollY.onChange((y) => {
    setScrollPosition(y);
  });
  return (
    <>
      <Layout>
        <div className="px-6">
          <section className="mb-20 -mt-20">
            <div className="pt-32">
              <p
                className="mb-6 text-center text-7xl"
                style={{ fontFamily: "Special Elite" }}
              >
                Press
              </p>
              <p className="text-center">
                For press inquires please email{" "}
                <span className="text-yellow-600 underline">
                  info@restaurants@gmail.com
                </span>
              </p>
            </div>
          </section>

          <section className="border-12 mx-auto mb-20 grid max-w-4xl grid-cols-1 content-center gap-20 sm:grid-cols-3">
            <Article
              image="/pizza.avif"
              publisher="Food & Wine"
              title="The Best Pizza in Every State"
            />
            <Article
              image="/owner.avif"
              publisher="Food & Wine"
              title="The Best Pizza in Every State"
            />
            <Article
              image="/hotpizza.avif"
              publisher="Food & Wine"
              title="The Best Pizza in Every State"
            />
            <Article
              image="/slide-1.avif"
              publisher="Food & Wine"
              title="The Best Pizza in Every State"
            />
            <Article
              image="/slide-2.avif"
              publisher="Food & Wine"
              title="The Best Pizza in Every State"
            />
            <Article
              image="/rollingdough.avif"
              publisher="Food & Wine"
              title="The Best Pizza in Every State"
            />
          </section>
        </div>
      </Layout>
    </>
  );
};

export default PressPage;
